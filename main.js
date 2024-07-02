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
    'lot': 'hódne',
    'butt': 'prdial',
    'ass': 'prdial',
    'czechia': 'zeska',
    'poland': 'polska',
    'germany': 'nemzia',
    'austria': 'rakusia',
    'slovakia': 'slovaka',
    'hungary': 'madarśa',
    'czech': 'pozeski',
    'polish': 'polski',
    'german': 'ponemzi',
    'hungarian': 'pomadari',
    'the': '',
    'send': 'posłať',
    'message': 'sprava',
    'fix': 'oprava',
    'fixing': 'opravuja',
    'it': 'sa',
    'job': 'praza',
    'occupation': 'okupazja',
    'work': 'prazjovať',
    'working': 'prazjovať',
    'at': 'na',
    'as': 'ako',
    'speak': 'pomluvi',
    'koposilian': 'Kópos',
    'Koposa': 'Kóposa',
    'language': 'jazjik',
    'tongue': 'jazjik',
    'so': '',
    'much': 'hódne',
    'alot': 'hódne',
    'boat': 'ludiska',
    'boats' 'ludisko',
    'human': 'zluvízek',
    'being': 'svorení',
    'are': 'su',
    'englang': 'anglia',
    'english': 'angliski',
    'scotland': 'skota',
    'scottish': 'skotis',
    'wales': 'zapadnie anglia',
    'welsh': 'angliski',
    'west': 'zapadnie',
    'east': 'vichodnie',
    'north': 'severie',
    'south': 'jihonie',
    'holy': 'svata',
    'fox': 'lizka',
    'dog': 'pejsók',
    'cat': 'kosiska',
    'bear': 'medveť',
    'eagle': 'orlizja',
    'principal': 'reditól',
    'king': 'krájl',
    'of': '',
    'region' 'kraj',
    'location': 'polohia',
    'motosand': 'mótosa',
    'slovasia': 'slovésia',
    'very': '',
    'low': 'málo',
    'high': 'vysoko',
    'short': 'skritovko',
    'gnome': 'gnum'
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
