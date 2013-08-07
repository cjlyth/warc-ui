#!/bin/bash
#
#
# see http://www.kchodorow.com/blog/2010/02/22/sleepy-mongoose-a-mongodb-rest-interface/
# https://github.com/10gen-labs/sleepy.mongoose/wiki

curl --data server=localhost:27017 'http://localhost:27080/_connect'


curl --data 'docs=[{"label":"one"},{"label":"two"}]' 'http://localhost:27080/warc/config/_insert'
curl -X GET 'http://localhost:27080/warc/config/_find'
