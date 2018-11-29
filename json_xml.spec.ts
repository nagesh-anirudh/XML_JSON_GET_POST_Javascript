const fs = require('fs');
describe('QA Assesment for JSON & XML Reading & Updating', function() {
	it('Updation of value in JSON file', function() {
		var totalContent = require("C:\\Users\\user\\Desktop\\nagesh\\sample-json.json");
        totalContent["firstname"] = "Anirudh"
        // write to file
        let data = JSON.stringify(totalContent);
        fs.writeFileSync("C:\\Users\\user\\Desktop\\nagesh\\edited-json.json", data);
        
    });
    it('Verification of Updated value in XML file', function() {
        var DOMParser = require('xmldom').DOMParser;
        var XMLSerializer = require('xmldom').XMLSerializer;
        var filename = "C:\\Users\\user\\Desktop\\nagesh\\a.xml";
        fs.readFile(filename, "utf-8", function (err,data) 
        {
            //CREATE/PARSE XML OBJECT FROM STRING
            var customerConfig = new DOMParser().parseFromString(data);
            customerConfig.getElementsByTagName("name")[0].childNodes[0].data = "Anirudh";
            var xmlString = new XMLSerializer().serializeToString(customerConfig);
            fs.writeFileSync("C:\\Users\\user\\Desktop\\nagesh\\data_new.xml", xmlString)
        });
	});
});



