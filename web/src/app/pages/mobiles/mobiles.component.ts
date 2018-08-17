import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../providers/document.service';
import { IMobiles } from '../../interfaces/user-document';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss'],
})
export class MobilesComponent implements OnInit {
  mobiles: IMobiles[];

  mobile = [
    {
      mobile_no: '60108108984',
      name: 'seri',
    },
    {
      mobile_no: '60192621296',
      name: 'seri',
    },
    {
      mobile_no: '60174081544',
      name: 'seri',
    },
    {
      mobile_no: '60196736803',
      name: 'seri',
    },
    {
      mobile_no: '60187907028',
      name: 'seri',
    },
    {
      mobile_no: '60175081829',
      name: 'seri',
    },
    {
      mobile_no: '60168046756',
      name: 'seri',
    },
    {
      mobile_no: '60127427074',
      name: 'seri',
    },
    {
      mobile_no: '60179474305',
      name: 'seri',
    },
    {
      mobile_no: '60166688441',
      name: 'seri',
    },
    {
      mobile_no: '60136250807',
      name: 'seri',
    },
    {
      mobile_no: '60124455308',
      name: 'seri',
    },
    {
      mobile_no: '60142885708',
      name: 'seri',
    },
    {
      mobile_no: '60109091954',
      name: 'seri',
    },
    {
      mobile_no: '60163745601',
      name: 'seri',
    },
    {
      mobile_no: '60107676746',
      name: 'seri',
    },
    {
      mobile_no: '60129383654',
      name: 'seri',
    },
    {
      mobile_no: '60108108984',
      name: 'seri',
    },
    {
      mobile_no: '60146321361',
      name: 'seri',
    },
    {
      mobile_no: '60109134620',
      name: 'seri',
    },
    {
      mobile_no: '60149845794',
      name: 'seri',
    },
    {
      mobile_no: '60174060069',
      name: 'seri',
    },
    {
      mobile_no: '60196613134',
      name: 'seri',
    },
    {
      mobile_no: '60165858324',
      name: 'seri',
    },
    {
      mobile_no: '60178732009',
      name: 'seri',
    },
    {
      mobile_no: '60174636075',
      name: 'seri',
    },
    {
      mobile_no: '60183555632',
      name: 'seri',
    },
    {
      mobile_no: '60197564037',
      name: 'seri',
    },
    {
      mobile_no: '60133516632',
      name: 'seri',
    },
    {
      mobile_no: '60143516451',
      name: 'seri',
    },
    {
      mobile_no: '60199502669',
      name: 'seri',
    },
    {
      mobile_no: '60199589709',
      name: 'seri',
    },
    {
      mobile_no: '60102080844',
      name: 'seri',
    },
    {
      mobile_no: '60198142704',
      name: 'seri',
    },
    {
      mobile_no: '60122614018',
      name: 'seri',
    },
    {
      mobile_no: '60125795734',
      name: 'seri',
    },
    {
      mobile_no: '60183527257',
      name: 'seri',
    },
    {
      mobile_no: '60199965105',
      name: 'seri',
    },
    {
      mobile_no: '60123825597',
      name: 'seri',
    },
    {
      mobile_no: '60139967669',
      name: 'seri',
    },
    {
      mobile_no: '60194797593',
      name: 'seri',
    },
    {
      mobile_no: '60197608626',
      name: 'seri',
    },
    {
      mobile_no: '60199830935',
      name: 'seri',
    },
    {
      mobile_no: '60102208060',
      name: 'seri',
    },
    {
      mobile_no: '60174021419',
      name: 'seri',
    },
    {
      mobile_no: '60132204619',
      name: 'seri',
    },
    {
      mobile_no: '60149359289',
      name: 'seri',
    },
    {
      mobile_no: '60105888865',
      name: 'seri',
    },
    {
      mobile_no: '60122925894',
      name: 'seri',
    },
    {
      mobile_no: '60172829596',
      name: 'seri',
    },
    {
      mobile_no: '60136754141',
      name: 'seri',
    },
    {
      mobile_no: '60194774417',
      name: 'seri',
    },
    {
      mobile_no: '60132240384',
      name: 'seri',
    },
    {
      mobile_no: '60176899790',
      name: 'seri',
    },
    {
      mobile_no: '60174938184',
      name: 'seri',
    },
    {
      mobile_no: '60179877783',
      name: 'seri',
    },
    {
      mobile_no: '60133561202',
      name: 'seri',
    },
    {
      mobile_no: '60124114393',
      name: 'seri',
    },
    {
      mobile_no: '60163313046',
      name: 'seri',
    },
    {
      mobile_no: '60178612506',
      name: 'seri',
    },
    {
      mobile_no: '60143226583',
      name: 'seri',
    },
    {
      mobile_no: '60145691255',
      name: 'seri',
    },
    {
      mobile_no: '60129688658',
      name: 'seri',
    },
    {
      mobile_no: '60148859665',
      name: 'seri',
    },
    {
      mobile_no: '60102557885',
      name: 'seri',
    },
    {
      mobile_no: '60125913479',
      name: 'seri',
    },
    {
      mobile_no: '60166070756',
      name: 'seri',
    },
    {
      mobile_no: '60194432454',
      name: 'seri',
    },
    {
      mobile_no: '60145056870',
      name: 'seri',
    },
    {
      mobile_no: '60172457654',
      name: 'seri',
    },
    {
      mobile_no: '60145392884',
      name: 'seri',
    },
    {
      mobile_no: '60195041456',
      name: 'seri',
    },
    {
      mobile_no: '60133533920',
      name: 'seri',
    },
    {
      mobile_no: '60168046046',
      name: 'seri',
    },
    {
      mobile_no: '60133388862',
      name: 'seri',
    },
    {
      mobile_no: '60109005020',
      name: 'seri',
    },
    {
      mobile_no: '60165759328',
      name: 'seri',
    },
    {
      mobile_no: '60168471285',
      name: 'seri',
    },
    {
      mobile_no: '60133582894',
      name: 'seri',
    },
    {
      mobile_no: '60164202357',
      name: 'seri',
    },
    {
      mobile_no: '60197306453',
      name: 'seri',
    },
    {
      mobile_no: '60195972594',
      name: 'seri',
    },
    {
      mobile_no: '60193438947',
      name: 'seri',
    },
    {
      mobile_no: '60132732846',
      name: 'seri',
    },
    {
      mobile_no: '60139378525',
      name: 'seri',
    },
    {
      mobile_no: '60195524676',
      name: 'seri',
    },
    {
      mobile_no: '60192308261',
      name: 'seri',
    },
    {
      mobile_no: '60196685859',
      name: 'seri',
    },
    {
      mobile_no: '60169414555',
      name: 'seri',
    },
    {
      mobile_no: '60198867720',
      name: 'seri',
    },
    {
      mobile_no: '60179062841',
      name: 'seri',
    },
    {
      mobile_no: '60135215601',
      name: 'seri',
    },
    {
      mobile_no: '60145344997',
      name: 'seri',
    },
    {
      mobile_no: '60198930229',
      name: 'seri',
    },
    {
      mobile_no: '60173550713',
      name: 'seri',
    },
    {
      mobile_no: '60197851334',
      name: 'seri',
    },
    {
      mobile_no: '60193020079',
      name: 'seri',
    },
    {
      mobile_no: '60176767901',
      name: 'seri',
    },
    {
      mobile_no: '60175081415',
      name: 'seri',
    },
    {
      mobile_no: '60163382537',
      name: 'seri',
    },
    {
      mobile_no: '60198334378',
      name: 'seri',
    },
    {
      mobile_no: '60125442944',
      name: 'seri',
    },
    {
      mobile_no: '60199388130',
      name: 'seri',
    },
    {
      mobile_no: '60175659845',
      name: 'seri',
    },
    {
      mobile_no: '60133606242',
      name: 'seri',
    },
    {
      mobile_no: '60128613041',
      name: 'seri',
    },
    {
      mobile_no: '60122468301',
      name: 'seri',
    },
    {
      mobile_no: '60194452960',
      name: 'seri',
    },
    {
      mobile_no: '60179266396',
      name: 'seri',
    },
    {
      mobile_no: '60165042598',
      name: 'seri',
    },
  ];

  constructor(private _doc: DocumentService) {
    this._doc.mobileCollection.valueChanges().subscribe((res: IMobiles[]) => {
      this.mobiles = res;
    });
  }

  ngOnInit() {
    // this.add();
  }

  // add() {
  //   this.mobile.forEach(m => {
  //     this._doc.mobileCollection.add(m);
  //   });
  // }
}
