from flask import Flask, request; import os, flask, requests

app = Flask(__name__)

@app.route("/")
def home():
    return flask.render_template("home.html")

@app.route("/about")
def about():
    return flask.render_template("about.html")

@app.route("/projects")
def projects():
    return 'In developement\n<a href="/">Return</a>'

@app.route("/contact")
def contact():
    return 'In developement\n<a href="/">Return</a>'

# @app.route("/api/<data>")
# def api(data):
#     if data == "discordUserProfile":
#         r = requests.get("https://discord.com/api/v6/users/597514002356240405", headers={"Authorization": "Bot MTExMjExNDcwMDI0NzkwNDQ2Ng.G2XAbK.w4Rk9vk8hML4B63226Dbc5ZbHUQyvjiK03Zbrc"})
#         return str(r.json())

if __name__ == "__main__":
    from pyngrok import ngrok
    url = ngrok.connect(5000).public_url
    print(' * Tunnel URL:', url)
    app.run(host="0.0.0.0",debug=True)
