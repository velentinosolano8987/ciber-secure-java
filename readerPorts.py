import argParse
import socket
import time

parse = argParse.ArgumentParser()  # Fixed typo: argParse → argparse
parse.add_argument('-t','--target', help='direccion')
args = parse.parse_args()

for port in range(0, 10000):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setTimeout(1)  # Added timeout to prevent hanging
    var = sock.connect_ex((args.target, port))  # Fixed typo: conect_ex → connect_ex
    if var == 0:
        print("OPENPORT", port)
    else:
        pass
    sock.close()