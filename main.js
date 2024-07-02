const lang = {
    'hello': 'ahoł',
    'hi': 'ahoł',
    'how': 'ak',
    'are': 'ja',
    'you': 'zji',
    'im': 'som',
    'good': 'dubro',
    'bad': 'nedobro',
    'terrifying': 'hrułlu',
    'horrifying': 'hrułlu',
    'terrible': 'hrułlu',
    'horrible': 'hrułlu',
    'terrifying': 'hrułlu',
    'i': 'jo',
    'love': 'lasł',
    'like': 'libjiz',
    'he': 'on',
    'him': 'on',
    'has': 'mať',
    'have': 'mať',
    'his': 'ma',
    'she': 'onu',
    'her': 'onu',
    'a': '',
    'an': '',
    'big': 'velizke',
    'bigger': 'velizke',
    'enourmos': 'hodne velizke',
    'lot': 'hodne',
    'butt': 'prdial',
    'ass': 'prdial',
    'czechia': 'ceska',
    'poland': 'polska',
    'germany': 'nemcia',
    'austria': 'rakusia',
    'slovakia': 'slovaka',
    'hungary': 'madarśa',
    'czech': 'poceski',
    'polish': 'polski',
    'german': 'ponemci',
    'hungarian': 'pomadari',
    'the': '',
    'send': 'posłať',
    'message': 'sprava',
    'fix': 'oprava',
    'fixing': 'opravuja',
    'it': 'sa',
    'job': 'praca',
    'occupation': 'okupacja',
    'work': 'pracjovať',
    'working': 'pracjovať',
    'at': 'na',
    'as': 'ako' ,
    'speak': 'pomluvi',
    'koposilian': 'Kópos',
    'Kopos': 'Kóposa'
}

function engkps() {
    let eng = document.getElementById('english').value.toLowerCase()
    eng = eng.replace(/,/g, '')
    let str = ''

    const words = eng.split(' ')
    words.forEach(function(word) {
        if (word in lang) {
            str += lang[word] + ' '
        } else {
            str += word + ' '
        }
    })

    document.getElementById('kopos').value = str.trim()
}

function kpseng() {
    let kps = document.getElementById('kopos').value.toLowerCase()
    kps = kps.replace(/,/g, '')
    let str = ''

    const rlang = {}
    for (engw in lang) {
        rlang[lang[engw]] = engw
    }

    const words = kps.split(' ')
    words.forEach(function(word) {
        if (word in rlang) {
            str += rlang[word] + ' '
        } else {
            str += word + ' '
        }
    })

    document.getElementById('english').value = str.trim()
}
