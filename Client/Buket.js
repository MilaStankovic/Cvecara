export class Buket
{
    constructor()
    {
        this.cont = null;
    }

    crtajBuket(host)
    {
        if(!host)
        {
            throw new Error("Host is undefined.");
        }

        this.cont = document.createElement("div");
        this.cont.className = "divZaBuket";
        host.appendChild(this.cont);

        let tmp = document.createElement("div");
        tmp.className = "gornjiDeo";
        this.cont.appendChild(tmp);

        tmp = document.createElement("div");
        tmp.className = "donjiDeo";
        this.cont.appendChild(tmp);
    }

    dodajSastojak(gdeDaDodam, kolicina, nazivSastojka)
    {
        let pom;

        if(gdeDaDodam)
        {
            for (let index = 0; index < kolicina; index++) {
                pom = document.createElement('div');
                this.cont.querySelector('.gornjiDeo').appendChild(pom);
                pom.className = 'gornji';
                switch (nazivSastojka) {
                    case 'Ruza':
                        pom.style.backgroundColor = 'red';
                        break;
                    case 'Orhideja':
                        pom.style.backgroundColor = 'yellow';
                        break;
                    case 'Lala':
                        pom.style.backgroundColor = 'purple';
                        break;
                    case 'Visibaba':
                        pom.style.backgroundColor = 'green';
                        break;
                    default:
                        pom.style.backgroundColor = 'black';
                        break;
                }
            }
            return;
        }

        for (let index = 0; index < kolicina; index++) {
            pom = document.createElement('div');
            this.cont.querySelector('.donjiDeo').appendChild(pom);
            pom.className = 'donji';
            switch (nazivSastojka) {
                case 'Folija':
                    pom.style.backgroundColor = 'gray';
                    break;
                case 'Korpica':
                    pom.style.backgroundColor = 'black';
                    break;
                case 'Papir':
                    pom.style.backgroundColor = 'pink';
                    break;
                case 'Mrezica':
                    pom.style.backgroundColor = 'blue';
                    break;
                default:
                    pom.style.backgroundColor = 'black';
                    break;
            }
        }
    }
}

let noviBuket = new Buket();
noviBuket.crtajBuket(document.body);
noviBuket.dodajSastojak(true, 1, 'Lala');
noviBuket.dodajSastojak(true, 1, 'Ruza');
noviBuket.dodajSastojak(true, 1, 'Visibaba');
noviBuket.dodajSastojak(true, 2, 'Orhideja');
noviBuket.dodajSastojak(false, 1, 'Folija');