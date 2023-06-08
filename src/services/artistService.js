
const artistService = ( function(){ 

    const artists = [

        {
            name: "Karpe",
            image: "karpe.jpg",
            description: "Karpe er en norsk rapgruppe fra Oslo, bestående av Magdi Omar Ytreeide Abdelmaguid og Chirag Rashmikant Patel."
        },
        {
            name: "XXXTentacion",
            image: "xxxtentacion.webp",
            description: "Jahseh Dwayne Ricardo Onfroy, kjent under artistnavnet XXXTentacion, var en amerikansk rapper, sanger og låtskriver. Hans gjennombrudd kom med singelen «Look at Me»."
        },
        {
            name: "Ant wan",
            image: "ant-wan.jpeg",
            description: "Antwan Afram, kjent profesjonelt som Ant Wan, er en svensk rapper av arameisk avstamning fra Västerås."
        },
        {
            name: "J. Cole",
            image: "j-cole.jpg",
            description: "Jermaine Lamarr Cole, bedre kjent under artistnavnet J. Cole, er en amerikansk rapper og produsent fra Fayetteville i Nord-Carolina."
        },
        {
            name: "Chris Brown",
            image: "chris-brown.jpg",
            description: "Christopher Maurice Brown er en amerikansk R&B- og pop-låtskriver, danser, musikkvideoregissør og skuespiller."
        },
        {
            name: "Beamon",
            image: "beamon.jpeg",
            description: "Beamon er en Canadisk rapper fra Milwaukee. Han har 212 sanger på soundcloud."
        },
        {
            name: "Lil Uzi Vert",
            image: "lil-uzi.webp",
            description: "Symere Woods, bedre kjent som Lil Uzi Vert er en amerikansk rapper, sanger og låtskriver. Woods ble først kjent da han ga ut mixtapen Luv is Rage i 2015."
        },
        {
            name: "Pop Smoke",
            image: "pop-smoke.jpg",
            description: "Bashar Barakah Jackson, bedre kjent under pseudonymet Pop Smoke, var en amerikansk rapper, sanger og låtskriver."
        },

    ];


    const getAll = () => artists;

    return {getAll}

} () );

export default artistService;