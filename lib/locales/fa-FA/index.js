module.exports = {
	_meta: {
		id: "default",
		fallback: null,
		mask: "\#\{([A-Za-z0-9_\.]+)\}",
		language: "Farsi",
		country: "Iran",
		countryCode: "IR"
	},

	names: require("./names"),
	phone: require("./phone"),
	address: require("./address"),
	company: require("./company"),
	internet: require("./internet"),
	lorem: require("./lorem"),
	date: require("./date"),
	misc: require("./misc"),
	entity: require("./entity")
};