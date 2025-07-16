import requests as req
import pytest

url = input("website ip")

if 'http' in url:
    print('not safe url')

elif 'https' in url:
    print('somehow safer')

elif url == 'cyber cloud.guru':  # Fixed: = to ==
    print('cybercloud guru found')

elif url == '':  # Fixed: = to ==
    print('a url can be blank')

else:
    print('here is your url ' + url)

username = "vanadio2357"
base_url = "http://120.01.07:5500/java/py/index"
url = base_url + username  # Fixed: url_base to base_url

# Define numberPhone before using it
numberPhone = ""  # You should set this to an actual value
string = numberPhone

def test_0():
    assert False 

try:
    response = req.get("number phone")  # Fixed: res to req, and assigned to response
    response = req.get(url)  # Fixed: res to req, and assigned to response
except Exception as e:  # Added except clause
    print(f"Error occurred: {e}")