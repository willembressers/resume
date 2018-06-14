/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/
var myTemplate = new GitGraph.Template({
    branch: {
        lineWidth: 5,
        spacingX: 50
    },
    commit: {
        spacingY: -80,
        dot: {
            size: 12,
        },
        message: {
            displayAuthor: false,
            displayBranch: true,
            displayHash: true,
            font: "normal 20pt Arial"
        },
    }
});

/***********************
 *    INITIALIZATION   *
 ***********************/
var gitGraph = new GitGraph({
    template: myTemplate
});

/************************
 * BRANCHES AND COMMITS *
 ************************/
var life = gitGraph.branch("life");

// // Commit on HEAD Branch which is "life"
// life.commit({
//     sha1: "25-04-1979",
//     message: "Hello world",
//     tag: "a-super-tag",
//     detailId: "detail",
// });  

// // Add few commits on life
// life.commit("My second commit").commit("Add awesome feature");

// // Create a new "education" branch from "life" with some custom configuration
// var education = life.branch("education");
// education.commit("Youhou \\o/");

// // Create another from "life"
// var feature3 = life.branch("feature3")
// feature3.commit().commit();


life.commit('Date of birth');
life.commit('1 year');
life.commit('2 year');
life.commit('3 year');
life.commit('4 year');
life.commit('5 year');
life.commit('6 year');
life.commit('7 year');
life.commit('8 year');
var basisschool = life.branch('basisschool');
basisschool.commit('Basisschool');
life.commit('9 year');
basisschool.merge(life)
var lomschool = life.branch('lomschool');
lomschool.commit('LOM. School');
life.commit('10 year');
life.commit('11 year');
life.commit('12 year');
life.commit('13 year');
lomschool.merge(life)
var lboelektrotechniek = life.branch('lboelektrotechniek');
lboelektrotechniek.commit('LBO. Elektrotechniek');
life.commit('14 year');
life.commit('15 year');
life.commit('16 year');
life.commit('17 year');
lboelektrotechniek.merge(life)
var mboelektrotechniekeerstemonteursterkstroominstallaties = life.branch('mboelektrotechniekeerstemonteursterkstroominstallaties');
mboelektrotechniekeerstemonteursterkstroominstallaties.commit('MBO. Elektrotechniek, (Eerste monteur Sterkstroom Installaties)');
life.commit('18 year');
life.commit('19 year');
life.commit('20 year');
var autocadtekenaar = life.branch('autocadtekenaar');
autocadtekenaar.commit('Autocad tekenaar');
life.commit('21 year');
mboelektrotechniekeerstemonteursterkstroominstallaties.merge(life)
life.commit('22 year');
var mboelektrotechniektechnicussterkstroominstallaties = life.branch('mboelektrotechniektechnicussterkstroominstallaties');
mboelektrotechniektechnicussterkstroominstallaties.commit('MBO. Elektrotechniek, Technicus Sterkstroom Installaties');
life.commit('23 year');
autocadtekenaar.merge(life)
var autocadtekenaar = life.branch('autocadtekenaar');
autocadtekenaar.commit('Autocad tekenaar');
life.commit('24 year');
autocadtekenaar.merge(life)
mboelektrotechniektechnicussterkstroominstallaties.merge(life)
var hboingelectricalengineeringdatacommunicationautomation = life.branch('hboingelectricalengineeringdatacommunicationautomation');
hboingelectricalengineeringdatacommunicationautomation.commit('HBO. Ing. Electrical Engineering - Data Communication & Automation');
life.commit('25 year');
life.commit('26 year');
life.commit('27 year');
hboingelectricalengineeringdatacommunicationautomation.merge(life)
var wobscartificialintelligenceintelligentsystems = life.branch('wobscartificialintelligenceintelligentsystems');
wobscartificialintelligenceintelligentsystems.commit('WO. BSc. Artificial Intelligence - Intelligent systems');
var ictsupport = life.branch('ictsupport');
ictsupport.commit('ict support');
life.commit('28 year');
life.commit('29 year');
life.commit('30 year');
wobscartificialintelligenceintelligentsystems.merge(life)
var womscinformationstudieshumancenteredmultimedia = life.branch('womscinformationstudieshumancenteredmultimedia');
womscinformationstudieshumancenteredmultimedia.commit('WO. MSc. Information studies, Human Centered Multimedia');
life.commit('31 year');
var oprichter = life.branch('oprichter');
oprichter.commit('Oprichter');
ictsupport.merge(life)
life.commit('32 year');
var softwareengineer = life.branch('softwareengineer');
softwareengineer.commit('Software engineer');
womscinformationstudieshumancenteredmultimedia.merge(life)
life.commit('33 year');
life.commit('34 year');
life.commit('Wedding (Melanie)');
life.commit('Date of birth (Milan)');
softwareengineer.merge(life)
var softwareengineer = life.branch('softwareengineer');
softwareengineer.commit('Software engineer');
life.commit('35 year');
life.commit('36 year');
softwareengineer.merge(life)
var dataengineerdatascientist = life.branch('dataengineerdatascientist');
dataengineerdatascientist.commit('Data Engineer / Data Scientist');
life.commit('Date of birth (Neva)');
life.commit('37 year');
dataengineerdatascientist.merge(life)
var datascientisttechnologylead = life.branch('datascientisttechnologylead');
datascientisttechnologylead.commit('Data Scientist /  Technology Lead');
var churnanalysis = life.branch('churnanalysis');
churnanalysis.commit('Churn analysis');
var incidentpredictions = life.branch('incidentpredictions');
churnanalysis.merge(life)
incidentpredictions.commit('Incident predictions');
incidentpredictions.merge(life)
var driverassistant = life.branch('driverassistant');
driverassistant.commit('Driver assistant');
var timeseriesforecasting = life.branch('timeseriesforecasting');
timeseriesforecasting.commit('Timeseries Forecasting');
var treatmentprediction = life.branch('treatmentprediction');
treatmentprediction.commit('Treatment prediction');
life.commit('38 year');
treatmentprediction.merge(life)
var genericpurchasertool = life.branch('genericpurchasertool');
genericpurchasertool.commit('Generic purchaser tool');
driverassistant.merge(life)
var boatconfiguration = life.branch('boatconfiguration');
boatconfiguration.commit('Boat configuration');
var behaviourdetection = life.branch('behaviourdetection');
behaviourdetection.commit('Behaviour detection');
behaviourdetection.merge(life)
life.commit('39 year');
var consultancy = life.branch('consultancy');
consultancy.commit('Consultancy');
var voiceinterface = life.branch('voiceinterface');
voiceinterface.commit('Voice interface');
var predictivemaintenance = life.branch('predictivemaintenance');
predictivemaintenance.commit('Predictive maintenance');
life.commit('40 year');
life.commit('41 year');
life.commit('42 year');
life.commit('43 year');
life.commit('44 year');
life.commit('45 year');
life.commit('46 year');
life.commit('47 year');
life.commit('48 year');
life.commit('49 year');
life.commit('50 year');
life.commit('51 year');
life.commit('52 year');
life.commit('53 year');
life.commit('54 year');
life.commit('55 year');
life.commit('56 year');
life.commit('57 year');
life.commit('58 year');
life.commit('59 year');
life.commit('60 year');
life.commit('61 year');
life.commit('62 year');
life.commit('63 year');
life.commit('64 year');
life.commit('65 year');
life.commit('66 year');
life.commit('67 year');
life.commit('68 year');
life.commit('69 year');
life.commit('70 year');
life.commit('71 year');
life.commit('72 year');
life.commit('73 year');
life.commit('74 year');
life.commit('75 year');
life.commit('76 year');
life.commit('77 year');
life.commit('78 year');
life.commit('79 year');
life.commit('80 year');
life.commit('81 year');
life.commit('82 year');
life.commit('83 year');
life.commit('84 year');
life.commit('85 year');
life.commit('86 year');
life.commit('87 year');
life.commit('88 year');
life.commit('89 year');
life.commit('90 year');
life.commit('91 year');
life.commit('92 year');
life.commit('93 year');
life.commit('94 year');
life.commit('95 year');
life.commit('96 year');
life.commit('97 year');
life.commit('98 year');
life.commit('99 year');
life.commit('100 year');
