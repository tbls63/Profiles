var body = $response.body;
body = '\/*\n@supported 3B29A308CDEF\n*\/\n' + body;

$done(body);
