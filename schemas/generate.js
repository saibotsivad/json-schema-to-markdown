var fs = require("fs");
var parser = require("../");

var files = [
	"PublicColorPaletteSpec",
	"PublicDashboardSpec",
	"PublicModelSpec",
	"PublicSavedViewSpec",
];

files.forEach(function (file) {
	var json = require("./" + file + ".schema.json");
	var markdown = parser(json);
	fs.writeFileSync(`markdown/${file}.md`, "# " + markdown);
});
