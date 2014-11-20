var memcache = require
(
    './memcache'
);

var client = new memcache.Client
    (
        port, hostname
    );

client.port = 11307; client.host = 'pub-memcache-11307.us-east-1-2.5.ec2.garantiadata.com';