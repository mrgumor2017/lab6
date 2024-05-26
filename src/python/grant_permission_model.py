import mysql.connector


class Grant_permission:
    def __init__(self):
        try:
            self.host = 'localhost'
            self.user = 'root'
            self.password = 'zxcv42177'
            self.db = 'mydb'

            self.connection = mysql.connector.connect(host=self.host,
                                                      user=self.user,
                                                      password=self.password,
                                                      database=self.db)

            self.cursor = self.connection.cursor(dictionary=True)
            print("Successful connection to database")
        except mysql.connector.Error as err:
            print("Failed to connect to database:", err)

    def get_all_Grant_permission(self):
        try:
            self.cursor.execute("select * from mydb.`grant_ permission`")
            Grant_permission = self.cursor.fetchall()

            if self.cursor.rowcount == 0:
                return {"message": "No Grant_permission", "error": "Not Found", "status_code": 404}

            return Grant_permission
        except mysql.connector.Error as err:
            return {'message': 'Failed to get all Grant_permission', 'error': str(err), 'status_code': 500}

    def get_grant_permission_by_id(self, per_id):
        try:
            per_id = int(per_id)
            self.cursor.execute("select * from mydb.`grant_ permission` where `Permission_Permission.id` = %s", (per_id,))
            permission = self.cursor.fetchone()

            if self.cursor.rowcount == 0:
                return {"message": f"No permission with id {per_id}", "error": "Not Found", "status_code": 404}

            return permission
        except mysql.connector.Error as err:
            return {'message': 'Failed to get permission', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid permission id", "error": "Bad Request", "status_code": 400}


    def delete_permission(self, per_id):
        try:
            per_id = int(per_id)
            self.cursor.execute('start transaction')
            rows_deleted = 0
            self.cursor.execute("delete from mydb.`grant_ permission` where `Permission_Permission.id` = %s", (per_id,))
            rows_deleted += self.cursor.rowcount
            self.connection.commit()
            if rows_deleted > 0:
                return {"message": f"Permission {per_id} deleted from database", "status_code": 204}
            else:
                return {"message": f"Permission {per_id} was not deleted from database",
                        "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to delete permission', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid permission id", "error": "Bad Request", "status_code": 400}

