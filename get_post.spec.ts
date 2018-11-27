let request = require("request");
describe("Errors in Protractor",function(){
  it("Error handleing in protractor",function(done){
      let userID = 1

    request.get({
      "headers": { "content-type": "application/json" },
      "url": "https://jsonplaceholder.typicode.com/posts/"+userID

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(body)["userId"]).toBe(userID)
        done();
    });
  });
  it("POST ",function(done){

    request.post({
      "headers": { "content-type": "application/json; charset=UTF-8" },
      "url": "https://jsonplaceholder.typicode.com/posts",
      "body": JSON.stringify({
		"title": "foo",
        "body": "bar",
        "userId": "101"
      })

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        expect(response.statusCode).toBe(201)
        done();
    });
  });
});