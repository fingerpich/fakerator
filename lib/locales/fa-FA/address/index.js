import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	country() {
		return this.address.countryAndCode().name;
	},

	countryCode() {
		return this.address.countryAndCode().code;
	},

	state: require("./state"),

	stateAbbr: require("./stateAbbr"),

	city: [
		"#{address.cityPrefix} #{names.firstName}#{address.citySuffix}",
		"#{address.cityPrefix} #{names.firstName}",
		"#{names.firstName}#{address.citySuffix}",
		"#{names.lastName}#{address.citySuffix}"
	],

	cityPrefix: [
		"North",
		"East",
		"West",
		"South",
		"New",
		"Lake",
		"Port"
	],

	citySuffix: [
		"town",
		"ton",
		"land",
		"ville",
		"berg",
		"burgh",
		"borough",
		"bury",
		"view",
		"port",
		"mouth",
		"stad",
		"furt",
		"chester",
		"mouth",
		"fort",
		"haven",
		"side",
		"shire"
	],

	street: [
		"#{address.buildingNumber} #{address.streetName}",
		"#{address.buildingNumber} #{address.streetName}",
		"#{address.buildingNumber} #{address.streetName} Apt. ###",
		"#{address.buildingNumber} #{address.streetName} Suite ###"
	],

	streetName: [
		"#{names.firstName} #{address.streetSuffix}",
		"#{names.lastName} #{address.streetSuffix}"	
	],

	streetSuffix: require("./streetSuffix"),

	buildingNumber: [
		"#####",
		"####",
		"###"	
	],

	postCode: [
		"#####",
		"#####-####"
	],

	geoLocation() {
		return {
			latitude: (this.random.number(180 * 10000) / 10000.0 - 90.0),
			longitude: (this.random.number(360 * 10000) / 10000.0 - 180.0)
		};
	},

	altitude(opts = {}) {
		return this.random.number(opts.min || 0, opts.max || 8848);
	},

	geoLocationNearBy: require("./geoLocationNearBy")
};