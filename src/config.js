"use strict";

const dotenv = require( "dotenv" );
const assert = require( "assert" );

dotenv.config();

const {
	PORT,
	HOST,
	HOST_URL,
	COOKIE_ENCRYPT_PWD,
	SQL_USER,
	SQL_PASSWORD,
	SQL_DATABASE,
	SQL_SERVER,
	OKTA_ORG_URL,
	OKTA_CLIENT_ID,
	OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT ==="true";

assert( PORT, "PORT is required" );
assert( HOST, "HOST is required" );
assert( HOST_URL, "HOST_URL is required" );
assert( COOKIE_ENCRYPT_PWD, "cookie encrypt password is required" );
assert( SQL_USER, "SQL user is required" );
assert( SQL_DATABASE, "DATABASE is required" );
assert( SQL_SERVER, "DATABASE server is required" );

module.exports ={
	port:PORT,
	host:HOST,
	url:HOST_URL,
	cookiePwd:COOKIE_ENCRYPT_PWD,
	sql:{
		server:SQL_SERVER,
		database:SQL_DATABASE,
		user:SQL_USER,
		password:SQL_PASSWORD,
		options:{
			encrypt:sqlEncrypt,
			enableArithAbort: true
		}
	},
	okta:{
		url: OKTA_ORG_URL,
		clientId: OKTA_CLIENT_ID,
		clientSecret:OKTA_CLIENT_SECRET
	}
};
