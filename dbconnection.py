import mysql.connector
import sshtunnel

sshtunnel.SSH_TIMEOUT = 5.0
sshtunnel.TUNNEL_TIMEOUT = 5.0

with sshtunnel.SSHTunnelForwarder(
    ('ssh.yourserver.com'),
    ssh_username='your SSH server username', ssh_password='secret1',
    remote_bind_address=('your database hostname', 3306)
) as tunnel:
    connection = mysql.connector.connect(
        user='your database username', password='secret2',
        host='127.0.0.1', port=tunnel.local_bind_port,
        database='your database name, e.g. yourusername$mydatabase',
    )
    # Do stuff
    connection.close()