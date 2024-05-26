from flask import request, jsonify
from grant_permission_model import Grant_permission
from app_init import app

permissions = Grant_permission()


@app.route("/permission", methods=['GET'])
def get_all_permission():
    return jsonify(permissions.get_all_Grant_permission())


@app.route("/permission/<permission_id>", methods=['GET'])
def get_permission_by_id(permission_id):
    return jsonify(permissions.get_grant_permission_by_id(permission_id))


@app.route("/permission/delete/<permission_id>", methods=['DELETE'])
def delete_permission(permission_id):
    return jsonify(permissions.delete_permission(permission_id))

