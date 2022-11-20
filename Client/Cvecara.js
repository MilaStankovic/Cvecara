export class Cvecara 
{
    constructor(naslovCvecare, ukupnaDnevnaZarada)
    {
        this.naslovCvecare = naslovCvecare;
        this.ukupnaDnevnaZarada = ukupnaDnevnaZarada;

        this.cont = null;
    }

    crtajCvecaru(host)
    {
        if(!host)
        {
            throw new Error("Host is undefined.");
        }

        this.cont = document.createElement("div");
        this.cont.className = "glavniKontejner";
        host.appendChild(this.cont);

        let tmp = document.createElement("h1");
        tmp.className = "naslovCvecare";
        tmp.innerHTML = `${this.naslovCvecare} - ${this.ukupnaDnevnaZarada}din`;
        this.cont.appendChild(tmp);

        tmp = document.createElement('div');
        tmp.className = 'velikiDiv';
        this.cont.appendChild(tmp);

        let pom = document.createElement('div');
        pom.className = 'leviDiv';
        tmp.appendChild(pom);

        let nizOpcija = [1, 2, 3];
        this.crtajRed(pom, 'Buket:', 'odabirBuketa', 'select', nizOpcija);
        nizOpcija = ['Ruza', 'Orhideja', 'Lala', 'Visibaba', 'Folija', 'Korpica', 'Papir', 'Mrezica'];
        this.crtajRed(pom, 'Sastojak:', 'odabirSastojaka', 'select', nizOpcija);
        this.crtajRed(pom, 'Kolicina:', 'odabirKolicine', 'input');

        let dugme = document.createElement('button');
        pom.appendChild(dugme);
        dugme.className = 'dodajSastojak';
        dugme.innerHTML = 'Dodaj';
        dugme.onclick = () => this.dodajSastojak();
    }

    crtajRed(host, nazivLabele, nazivKlase, tip, opcije) 
    {
        let tmp = document.createElement('div');
        tmp.className = 'divZaRed';
        host.appendChild(tmp);

        let pom = document.createElement('label');
        pom.className = 'nazivReda';
        pom.innerHTML = nazivLabele;
        tmp.appendChild(pom);

        pom = document.createElement(tip);
        pom.className = `${nazivKlase} odabirSvega`;
        tmp.appendChild(pom);

        if(tip === 'input') {
            pom.type = 'number'
            return;
        }

        let op;
        opcije.forEach((opcija, index) => {
            op = document.createElement('option');
            op.className = `${opcija}${index}`;
            op.innerHTML = opcija;
            pom.appendChild(op);
        });
    }

    dodajSastojak() 
    {
        console.log('Test');
    }
}

let novaCvecara = new Cvecara('Lolipop', 23000);
novaCvecara.crtajCvecaru(document.body);