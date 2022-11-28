extern crate redis;

fn main() {
    // connect to redis
    let client = redis::Client::open("redis://qwq.sh/");
    let mut con = client.get_connection().expect();
    // throw away the result, just make sure it does not fail
    let _: () = con.set("my_key", 42);
    // read back the key and return it.  Because the return value
    // from the function is a result for integer this will automatically
    // convert into one.
    con.get("my_key");
    print!("{}", con.get("my_key"));
}
