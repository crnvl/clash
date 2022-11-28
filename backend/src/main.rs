extern crate redis;
use redis::{Client, RedisError, Commands, RedisResult};

fn main() -> Result<(), RedisError> {
    // connect to redis
    let client = redis::Client::open("redis://qwq.sh:6379")?;
    let mut con = client.get_connection()?;

    // throw away the result, just make sure it does not fail
    let _: () = con.set("my_key", 42)?;
    // read back the key and return it.  Because the return value
    // from the function is a result for integer this will automatically
    // convert into one.
    let value: i32 = con.get("my_key")?;
    print!("{}", value);
    
    Ok(())
}
