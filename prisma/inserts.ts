import Document from "../models/document";
import DocumentItem from "../models/documentItem";

var docs = [
    {
        "Numero": "1",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "JLN0997A8A",
        "Fuego": "534160",
        "Guia": "950748",
        "Peso": "16450"
    },
    {
        "Numero": "2",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0083G3A",
        "Fuego": "534605",
        "Guia": "950748",
        "Peso": "16450"
    },
    {
        "Numero": "3",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0078G8A",
        "Fuego": "534610",
        "Guia": "950748",
        "Peso": "16450"
    },
    {
        "Numero": "4",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "CVY0094E2A",
        "Fuego": "534756",
        "Guia": "950748",
        "Peso": "16450"
    },
    {
        "Numero": "5",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0098G8A",
        "Fuego": "534614",
        "Guia": "950749",
        "Peso": "17130"
    },
    {
        "Numero": "6",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0491G5A",
        "Fuego": "534542",
        "Guia": "950749",
        "Peso": "17130"
    },
    {
        "Numero": "7",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0089G7A",
        "Fuego": "534852",
        "Guia": "950749",
        "Peso": "17130"
    },
    {
        "Numero": "8",
        "Fecha": "8/16/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0369G7A",
        "Fuego": "534842",
        "Guia": "950749",
        "Peso": "17130"
    },
    {
        "Numero": "9",
        "Fecha": "8/17/23",
        "Proveedor": "Michelin",
        "Serie": "SLH0183G3A",
        "Fuego": "534594",
        "Guia": "950751",
        "Peso": "16780"
    },
    {
        "Numero": "10",
        "Fecha": "8/17/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0386G0A",
        "Fuego": "534651",
        "Guia": "950751",
        "Peso": "16780"
    },
    {
        "Numero": "11",
        "Fecha": "8/17/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0667G9A",
        "Fuego": "534541",
        "Guia": "950751",
        "Peso": "16780"
    },
    {
        "Numero": "12",
        "Fecha": "8/17/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0835G1A",
        "Fuego": "534577",
        "Guia": "950751",
        "Peso": "16780"
    },
    {
        "Numero": "13",
        "Fecha": "8/25/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0184G2A",
        "Fuego": "534663",
        "Guia": "950761",
        "Peso": "16730"
    },
    {
        "Numero": "14",
        "Fecha": "8/25/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0402G4A",
        "Fuego": "534700",
        "Guia": "950761",
        "Peso": "16730"
    },
    {
        "Numero": "15",
        "Fecha": "8/25/23",
        "Proveedor": "Michelin",
        "Serie": "RLO1355G1A",
        "Fuego": "534863",
        "Guia": "950761",
        "Peso": "16730"
    },
    {
        "Numero": "16",
        "Fecha": "8/25/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0799G7A",
        "Fuego": "534581",
        "Guia": "950761",
        "Peso": "16730"
    },
    {
        "Numero": "17",
        "Fecha": "8/29/23",
        "Proveedor": "Michelin",
        "Serie": "NLN0023A2A",
        "Fuego": "533997",
        "Guia": "950763",
        "Peso": "16780"
    },
    {
        "Numero": "18",
        "Fecha": "8/29/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0062E4A",
        "Fuego": "534814",
        "Guia": "950763",
        "Peso": "16780"
    },
    {
        "Numero": "19",
        "Fecha": "8/29/23",
        "Proveedor": "Michelin",
        "Serie": "GLO0101G5A",
        "Fuego": "534684",
        "Guia": "950763",
        "Peso": "16780"
    },
    {
        "Numero": "20",
        "Fecha": "8/29/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0423G3A",
        "Fuego": "534602",
        "Guia": "950763",
        "Peso": "16780"
    },
    {
        "Numero": "21",
        "Fecha": "9/1/23",
        "Proveedor": "Michelin",
        "Serie": "TLO0096U3C",
        "Fuego": "533968",
        "Guia": "950767",
        "Peso": "16880"
    },
    {
        "Numero": "22",
        "Fecha": "9/1/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0025E1A",
        "Fuego": "534767",
        "Guia": "950767",
        "Peso": "16880"
    },
    {
        "Numero": "23",
        "Fecha": "9/1/23",
        "Proveedor": "Michelin",
        "Serie": "TLG1232U7A",
        "Fuego": "533982",
        "Guia": "950767",
        "Peso": "16880"
    },
    {
        "Numero": "24",
        "Fecha": "9/1/23",
        "Proveedor": "Michelin",
        "Serie": "MLG0929U0A",
        "Fuego": "533947",
        "Guia": "950767",
        "Peso": "16880"
    },
    {
        "Numero": "25",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0384G2A",
        "Fuego": "534518",
        "Guia": "950805",
        "Peso": "15800"
    },
    {
        "Numero": "26",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": " OLH1136G0A",
        "Fuego": "534394",
        "Guia": "950805",
        "Peso": "15800"
    },
    {
        "Numero": "27",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": " HLH0917G9A",
        "Fuego": "534389",
        "Guia": "950805",
        "Peso": "15800"
    },
    {
        "Numero": "28",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0649G7A",
        "Fuego": "534636",
        "Guia": "950805",
        "Peso": "15800"
    },
    {
        "Numero": "29",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0246G0A",
        "Fuego": "534669",
        "Guia": "950806",
        "Peso": "16730"
    },
    {
        "Numero": "30",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0321G5A",
        "Fuego": "534496",
        "Guia": "950806",
        "Peso": "16730"
    },
    {
        "Numero": "31",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1278G8A",
        "Fuego": "534418",
        "Guia": "950806",
        "Peso": "16730"
    },
    {
        "Numero": "32",
        "Fecha": "9/13/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0352E4A",
        "Fuego": "534833",
        "Guia": "950806",
        "Peso": "16730"
    },
    {
        "Numero": "33",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "OLO0696G0A",
        "Fuego": "534723",
        "Guia": "950815",
        "Peso": "15850"
    },
    {
        "Numero": "34",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "GLO0783G3A",
        "Fuego": "534648",
        "Guia": "950815",
        "Peso": "15850"
    },
    {
        "Numero": "35",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0455G1A",
        "Fuego": "534520",
        "Guia": "950815",
        "Peso": "15850"
    },
    {
        "Numero": "36",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0255G1A",
        "Fuego": "534672",
        "Guia": "950815",
        "Peso": "15850"
    },
    {
        "Numero": "37",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "FVB0049E7A",
        "Fuego": "534617",
        "Guia": "950816",
        "Peso": "16580"
    },
    {
        "Numero": "38",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0264G2A",
        "Fuego": "534670",
        "Guia": "950816",
        "Peso": "16580"
    },
    {
        "Numero": "39",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0249G7A",
        "Fuego": "534667",
        "Guia": "950816",
        "Peso": "16580"
    },
    {
        "Numero": "40",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0414G2A",
        "Fuego": "534685",
        "Guia": "950816",
        "Peso": "16580"
    },
    {
        "Numero": "41",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0340E6A",
        "Fuego": "534815",
        "Guia": "950817",
        "Peso": "15780"
    },
    {
        "Numero": "42",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0186G0A",
        "Fuego": "534676",
        "Guia": "950817",
        "Peso": "15780"
    },
    {
        "Numero": "43",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0133G3A",
        "Fuego": "534625",
        "Guia": "950817",
        "Peso": "15780"
    },
    {
        "Numero": "44",
        "Fecha": "9/26/23",
        "Proveedor": "Michelin",
        "Serie": "IVY0346E0A",
        "Fuego": "534846",
        "Guia": "950817",
        "Peso": "15780"
    },
    {
        "Numero": "45",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": " \nXVY0033E3A",
        "Fuego": "534776",
        "Guia": "950823",
        "Peso": "16520"
    },
    {
        "Numero": "46",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": " \nHLH0889G7A",
        "Fuego": "534391",
        "Guia": "950823",
        "Peso": "16520"
    },
    {
        "Numero": "47",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0302G4A",
        "Fuego": "534502",
        "Guia": "950823",
        "Peso": "16520"
    },
    {
        "Numero": "48",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "OLG0893S3A",
        "Fuego": "533801",
        "Guia": "950823",
        "Peso": "16520"
    },
    {
        "Numero": "49",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": " \nOLO0691G5A",
        "Fuego": "534690",
        "Guia": "950824",
        "Peso": "16260"
    },
    {
        "Numero": "50",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": " \nJLG0563M3A",
        "Fuego": "533839",
        "Guia": "950824",
        "Peso": "16260"
    },
    {
        "Numero": "51",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "KLG1269M7A",
        "Fuego": "533882",
        "Guia": "950824",
        "Peso": "16260"
    },
    {
        "Numero": "52",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "OLO0741G5A",
        "Fuego": "534733",
        "Guia": "950824",
        "Peso": "16260"
    },
    {
        "Numero": "53",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0096G0A",
        "Fuego": "534607",
        "Guia": "950825",
        "Peso": "16080"
    },
    {
        "Numero": "54",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": " \nRLH0719G7A",
        "Fuego": "534511",
        "Guia": "950825",
        "Peso": "16080"
    },
    {
        "Numero": "55",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0129G7A",
        "Fuego": "534628",
        "Guia": "950825",
        "Peso": "16080"
    },
    {
        "Numero": "56",
        "Fecha": "9/28/23",
        "Proveedor": "Michelin",
        "Serie": "OLN0672A3A",
        "Fuego": "534058",
        "Guia": "950825",
        "Peso": "16080"
    },
    {
        "Numero": "57",
        "Fecha": "9/30/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1417G9A",
        "Fuego": "534455",
        "Guia": "950829",
        "Peso": "15750"
    },
    {
        "Numero": "58",
        "Fecha": "9/30/23",
        "Proveedor": "Michelin",
        "Serie": " \nKLH0271G5A",
        "Fuego": "534491",
        "Guia": "950829",
        "Peso": "15750"
    },
    {
        "Numero": "59",
        "Fecha": "9/30/23",
        "Proveedor": "Michelin",
        "Serie": " \nOLO0735G1A",
        "Fuego": "534729",
        "Guia": "950829",
        "Peso": "15750"
    },
    {
        "Numero": "60",
        "Fecha": "9/30/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0631G5A",
        "Fuego": "534634",
        "Guia": "950829",
        "Peso": "15750"
    },
    {
        "Numero": "61",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": " \nLLH0074G2A",
        "Fuego": "534589",
        "Guia": "950834",
        "Peso": "15610"
    },
    {
        "Numero": "62",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": " \nOLH1324G2A",
        "Fuego": "534441",
        "Guia": "950834",
        "Peso": "15610"
    },
    {
        "Numero": "63",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "BVA0245F3A",
        "Fuego": "533758",
        "Guia": "950834",
        "Peso": "15610"
    },
    {
        "Numero": "64",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": " \nGLO0740G6A",
        "Fuego": "534647",
        "Guia": "950834",
        "Peso": "15610"
    },
    {
        "Numero": "65",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0151G5A",
        "Fuego": "534652",
        "Guia": "950835",
        "Peso": "16320"
    },
    {
        "Numero": "66",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1360G6A",
        "Fuego": "534460",
        "Guia": "950835",
        "Peso": "16320"
    },
    {
        "Numero": "67",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0446G0A",
        "Fuego": "534537",
        "Guia": "950835",
        "Peso": "16320"
    },
    {
        "Numero": "68",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "CVY0095E1A",
        "Fuego": "534757",
        "Guia": "950835",
        "Peso": "16320"
    },
    {
        "Numero": "69",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0307G9A",
        "Fuego": "534529",
        "Guia": "950836",
        "Peso": "15840"
    },
    {
        "Numero": "70",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0128G8A",
        "Fuego": "534631",
        "Guia": "950836",
        "Peso": "15840"
    },
    {
        "Numero": "71",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0720G6A",
        "Fuego": "534539",
        "Guia": "950836",
        "Peso": "15840"
    },
    {
        "Numero": "72",
        "Fecha": "10/3/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0801G5A",
        "Fuego": "534556",
        "Guia": "950836",
        "Peso": "15840"
    },
    {
        "Numero": "73",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0078E8A",
        "Fuego": "534809",
        "Guia": "950844",
        "Peso": "16250"
    },
    {
        "Numero": "74",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "SLH0307G9A",
        "Fuego": "534565",
        "Guia": "950844",
        "Peso": "16250"
    },
    {
        "Numero": "75",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "CVY0059E7A",
        "Fuego": "534758",
        "Guia": "950844",
        "Peso": "16250"
    },
    {
        "Numero": "76",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0652G4A",
        "Fuego": "534633",
        "Guia": "950844",
        "Peso": "16250"
    },
    {
        "Numero": "77",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0711G5A",
        "Fuego": "534679",
        "Guia": "950843",
        "Peso": "16570"
    },
    {
        "Numero": "78",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "SLO0024G2A",
        "Fuego": "534682",
        "Guia": "950843",
        "Peso": "16570"
    },
    {
        "Numero": "79",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0017E9A",
        "Fuego": "534828",
        "Guia": "950843",
        "Peso": "16570"
    },
    {
        "Numero": "80",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0395G1A",
        "Fuego": "534526",
        "Guia": "950843",
        "Peso": "16570"
    },
    {
        "Numero": "81",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0347G9A",
        "Fuego": "534695",
        "Guia": "950842",
        "Peso": "16060"
    },
    {
        "Numero": "82",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0126G0A",
        "Fuego": "534627",
        "Guia": "950842",
        "Peso": "16060"
    },
    {
        "Numero": "83",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0747G9A",
        "Fuego": "534516",
        "Guia": "950842",
        "Peso": "16060"
    },
    {
        "Numero": "84",
        "Fecha": "10/5/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0323G3A",
        "Fuego": "534696",
        "Guia": "950842",
        "Peso": "16060"
    },
    {
        "Numero": "85",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "LLH0068G8A",
        "Fuego": "534588",
        "Guia": "950864",
        "Peso": "16010"
    },
    {
        "Numero": "86",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0657G9A",
        "Fuego": "534545",
        "Guia": "950864",
        "Peso": "16010"
    },
    {
        "Numero": "87",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "LLH0062G4A",
        "Fuego": "534590",
        "Guia": "950864",
        "Peso": "16010"
    },
    {
        "Numero": "88",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0641G5A",
        "Fuego": "534549",
        "Guia": "950864",
        "Peso": "16010"
    },
    {
        "Numero": "89",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "JLN0573A2A",
        "Fuego": "534141",
        "Guia": "950865",
        "Peso": "16710"
    },
    {
        "Numero": "90",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "CVY0054E2A",
        "Fuego": "534764",
        "Guia": "950865",
        "Peso": "16710"
    },
    {
        "Numero": "91",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0045E1A",
        "Fuego": "534771",
        "Guia": "950865",
        "Peso": "16710"
    },
    {
        "Numero": "92",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0676G0A",
        "Fuego": "534637",
        "Guia": "950865",
        "Peso": "16710"
    },
    {
        "Numero": "93",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "RLN0550A5A",
        "Fuego": "534238",
        "Guia": "950863",
        "Peso": "16210"
    },
    {
        "Numero": "94",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "OLO0633G3A",
        "Fuego": "534717",
        "Guia": "950863",
        "Peso": "16210"
    },
    {
        "Numero": "95",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "HLH0870G6A",
        "Fuego": "534382",
        "Guia": "950863",
        "Peso": "16210"
    },
    {
        "Numero": "96",
        "Fecha": "10/13/23",
        "Proveedor": "Michelin",
        "Serie": "FVB0052E4A",
        "Fuego": "534615",
        "Guia": "950863",
        "Peso": "16210"
    },
    {
        "Numero": "97",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "GLO0783G3A",
        "Fuego": "534648",
        "Guia": "950871",
        "Peso": "16250"
    },
    {
        "Numero": "98",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0138E8A",
        "Fuego": "534789",
        "Guia": "950871",
        "Peso": "16250"
    },
    {
        "Numero": "99",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "JLN1010A5A",
        "Fuego": "534185S",
        "Guia": "950871",
        "Peso": "16250"
    },
    {
        "Numero": "100",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1289G7A",
        "Fuego": "534416",
        "Guia": "950871",
        "Peso": "16250"
    },
    {
        "Numero": "101",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1197G9A",
        "Fuego": "534424",
        "Guia": "950870",
        "Peso": "15930"
    },
    {
        "Numero": "102",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "LLH0056G0A",
        "Fuego": "534564",
        "Guia": "950870",
        "Peso": "15930"
    },
    {
        "Numero": "103",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "HLH0884G2A",
        "Fuego": "534388",
        "Guia": "950870",
        "Peso": "15930"
    },
    {
        "Numero": "104",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "MLH0093G3A",
        "Fuego": "534611",
        "Guia": "950870",
        "Peso": "15930"
    },
    {
        "Numero": "105",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "TLH0611G5A",
        "Fuego": "534650",
        "Guia": "950872",
        "Peso": "16950"
    },
    {
        "Numero": "106",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0315G1A",
        "Fuego": "534499",
        "Guia": "950872",
        "Peso": "16950"
    },
    {
        "Numero": "107",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0652G4A",
        "Fuego": "534552",
        "Guia": "950872",
        "Peso": "16950"
    },
    {
        "Numero": "108",
        "Fecha": "10/17/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0379E7A",
        "Fuego": "534841",
        "Guia": "950872",
        "Peso": "16950"
    },
    {
        "Numero": "109",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "PLN1335A0A",
        "Fuego": "534190",
        "Guia": "950874",
        "Peso": "18220"
    },
    {
        "Numero": "110",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "FVB0046E0A",
        "Fuego": "534620",
        "Guia": "950874",
        "Peso": "18220"
    },
    {
        "Numero": "111",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0341E5A",
        "Fuego": "534835",
        "Guia": "950874",
        "Peso": "18220"
    },
    {
        "Numero": "112",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "MLO2306G0A",
        "Fuego": "534896",
        "Guia": "950874",
        "Peso": "18220"
    },
    {
        "Numero": "113",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "HLO0245G1A",
        "Fuego": "534665",
        "Guia": "950875",
        "Peso": "16480"
    },
    {
        "Numero": "114",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0256G0A",
        "Fuego": "534674",
        "Guia": "950875",
        "Peso": "16480"
    },
    {
        "Numero": "115",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "OLO0667G9A",
        "Fuego": "534724",
        "Guia": "950875",
        "Peso": "16480"
    },
    {
        "Numero": "116",
        "Fecha": "10/18/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0282G4A",
        "Fuego": "534531",
        "Guia": "950875",
        "Peso": "16480"
    },
    {
        "Numero": "117",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0766G0A",
        "Fuego": "534560",
        "Guia": "950877",
        "Peso": "16560"
    },
    {
        "Numero": "118",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "HLN0201A4A",
        "Fuego": "534005",
        "Guia": "950877",
        "Peso": "16560"
    },
    {
        "Numero": "119",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "RLN0432A3A",
        "Fuego": "534216",
        "Guia": "950877",
        "Peso": "16560"
    },
    {
        "Numero": "120",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "LLH0081G5A",
        "Fuego": "534584",
        "Guia": "950877",
        "Peso": "16560"
    },
    {
        "Numero": "121",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0347E9A",
        "Fuego": "534837",
        "Guia": "950878",
        "Peso": "17470"
    },
    {
        "Numero": "122",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "MLO2329G7A",
        "Fuego": "534872",
        "Guia": "950878",
        "Peso": "17470"
    },
    {
        "Numero": "123",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0222G4A",
        "Fuego": "534678",
        "Guia": "950878",
        "Peso": "17470"
    },
    {
        "Numero": "124",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "CVY0070E6A",
        "Fuego": "534763",
        "Guia": "950878",
        "Peso": "17470"
    },
    {
        "Numero": "125",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "NLH0619G7A",
        "Fuego": "534371",
        "Guia": "950879",
        "Peso": "16290"
    },
    {
        "Numero": "126",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "MLG0948U1A",
        "Fuego": "533929",
        "Guia": "950879",
        "Peso": "16290"
    },
    {
        "Numero": "127",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0357E9A",
        "Fuego": "534826",
        "Guia": "950879",
        "Peso": "16290"
    },
    {
        "Numero": "128",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "KLH0423G3A",
        "Fuego": "534521",
        "Guia": "950879",
        "Peso": "16290"
    },
    {
        "Numero": "129",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "NLO0227G9A",
        "Fuego": "534675",
        "Guia": "950880",
        "Peso": "16750"
    },
    {
        "Numero": "130",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0068E8A",
        "Fuego": "534787",
        "Guia": "950880",
        "Peso": "16750"
    },
    {
        "Numero": "131",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "OLH1375G1A",
        "Fuego": "534451",
        "Guia": "950880",
        "Peso": "16750"
    },
    {
        "Numero": "132",
        "Fecha": "10/19/23",
        "Proveedor": "Michelin",
        "Serie": "NLH0601G5A",
        "Fuego": "534360",
        "Guia": "950880",
        "Peso": "16750"
    },
    {
        "Numero": "133",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0053E3A",
        "Fuego": "534772",
        "Guia": "950894",
        "Peso": "17190"
    },
    {
        "Numero": "134",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0016E0A",
        "Fuego": "534768",
        "Guia": "950894",
        "Peso": "17190"
    },
    {
        "Numero": "135",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "PLN1408A7A",
        "Fuego": "534207",
        "Guia": "950894",
        "Peso": "17190"
    },
    {
        "Numero": "136",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "RLH0650G6A",
        "Fuego": "534514",
        "Guia": "950894",
        "Peso": "17190"
    },
    {
        "Numero": "137",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "DVY0025E1A",
        "Fuego": "534818",
        "Guia": "950895",
        "Peso": "17860"
    },
    {
        "Numero": "138",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0157E9A",
        "Fuego": "534775",
        "Guia": "950895",
        "Peso": "17860"
    },
    {
        "Numero": "139",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0158E8A",
        "Fuego": "534812",
        "Guia": "950895",
        "Peso": "17860"
    },
    {
        "Numero": "140",
        "Fecha": "10/20/23",
        "Proveedor": "Michelin",
        "Serie": "XVY0155E1A",
        "Fuego": "534795",
        "Guia": "950895",
        "Peso": "17860"
    },
    {
        "Numero": "141",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2327G9A",
        "Fuego": "534871",
        "Guia": "951090",
        "Peso": "16420"
    },
    {
        "Numero": "142",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "OLG0877S9A",
        "Fuego": "533797",
        "Guia": "951090",
        "Peso": "16420"
    },
    {
        "Numero": "143",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0080G6A",
        "Fuego": "534585",
        "Guia": "951090",
        "Peso": "16420"
    },
    {
        "Numero": "144",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0025G1A",
        "Fuego": "534570",
        "Guia": "951090",
        "Peso": "16420"
    },
    {
        "Numero": "145",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "MLH0088G8A",
        "Fuego": "534606",
        "Guia": "951091",
        "Peso": "15950"
    },
    {
        "Numero": "146",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "KLM0345G1A",
        "Fuego": "534522",
        "Guia": "951091",
        "Peso": "15950"
    },
    {
        "Numero": "147",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0143G3A",
        "Fuego": "534661",
        "Guia": "951091",
        "Peso": "15950"
    },
    {
        "Numero": "148",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0049G7A",
        "Fuego": "534778",
        "Guia": "951091",
        "Peso": "15950"
    },
    {
        "Numero": "149",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0165G1A",
        "Fuego": "534746",
        "Guia": "951092",
        "Peso": "16470"
    },
    {
        "Numero": "150",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "FVZ1447E9A",
        "Fuego": "534293",
        "Guia": "951092",
        "Peso": "16470"
    },
    {
        "Numero": "151",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "OLH1363G3A",
        "Fuego": "534464",
        "Guia": "951092",
        "Peso": "16470"
    },
    {
        "Numero": "152",
        "Fecha": "1/10/24",
        "Proveedor": "Michelin",
        "Serie": "NLJ3603G3A",
        "Fuego": "535037",
        "Guia": "951092",
        "Peso": "16470"
    },
    {
        "Numero": "153",
        "Fecha": "2/10/24",
        "Proveedor": "Michelin",
        "Serie": "SLO2096G0A",
        "Fuego": "534885",
        "Guia": "951137",
        "Peso": "17350"
    },
    {
        "Numero": "154",
        "Fecha": "2/10/24",
        "Proveedor": "Michelin",
        "Serie": "DVY0370E6A",
        "Fuego": "534850",
        "Guia": "951137",
        "Peso": "17350"
    },
    {
        "Numero": "155",
        "Fecha": "2/10/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0065E1A",
        "Fuego": "534773",
        "Guia": "951137",
        "Peso": "17350"
    },
    {
        "Numero": "156",
        "Fecha": "2/10/24",
        "Proveedor": "Michelin",
        "Serie": "CVY0074E2A",
        "Fuego": "534753",
        "Guia": "951137",
        "Peso": "17350"
    },
    {
        "Numero": "157",
        "Fecha": "2/11/24",
        "Proveedor": "Michelin",
        "Serie": "TLO2785G1A",
        "Fuego": "534917",
        "Guia": "951138",
        "Peso": "16330"
    },
    {
        "Numero": "158",
        "Fecha": "2/11/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0342G4A",
        "Fuego": "534698",
        "Guia": "951138",
        "Peso": "16330"
    },
    {
        "Numero": "159",
        "Fecha": "2/11/24",
        "Proveedor": "Michelin",
        "Serie": "TLH0152G4A",
        "Fuego": "534681",
        "Guia": "951138",
        "Peso": "16330"
    },
    {
        "Numero": "160",
        "Fecha": "2/11/24",
        "Proveedor": "Michelin",
        "Serie": "FVB0059E7A",
        "Fuego": "534623",
        "Guia": "951138",
        "Peso": "16330"
    },
    {
        "Numero": "161",
        "Fecha": "2/13/24",
        "Proveedor": "Michelin",
        "Serie": "TLH0687G9A",
        "Fuego": "534644",
        "Guia": "951142",
        "Peso": "16700"
    },
    {
        "Numero": "162",
        "Fecha": "2/13/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2248G8A ",
        "Fuego": "534925",
        "Guia": "951142",
        "Peso": "16700"
    },
    {
        "Numero": "163",
        "Fecha": "2/13/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0039G7A ",
        "Fuego": "534851",
        "Guia": "951142",
        "Peso": "16700"
    },
    {
        "Numero": "164",
        "Fecha": "2/13/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2325G1A ",
        "Fuego": "534922",
        "Guia": "951142",
        "Peso": "16700"
    },
    {
        "Numero": "165",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0071G5A",
        "Fuego": "534580",
        "Guia": "951168",
        "Peso": "17150"
    },
    {
        "Numero": "166",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0627G9A",
        "Fuego": "534855",
        "Guia": "951168",
        "Peso": "17150"
    },
    {
        "Numero": "167",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "RLH0826G0A",
        "Fuego": "534557",
        "Guia": "951168",
        "Peso": "17150"
    },
    {
        "Numero": "168",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0105G1A",
        "Fuego": "534632",
        "Guia": "951168",
        "Peso": "17150"
    },
    {
        "Numero": "169",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "TLH0656G0A",
        "Fuego": "534680",
        "Guia": "951169",
        "Peso": "16020"
    },
    {
        "Numero": "170",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "OLH1162G4A",
        "Fuego": "534434",
        "Guia": "951169",
        "Peso": "16020"
    },
    {
        "Numero": "171",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0491G5A",
        "Fuego": "534707",
        "Guia": "951169",
        "Peso": "16020"
    },
    {
        "Numero": "172",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2249G7A",
        "Fuego": "534889",
        "Guia": "951169",
        "Peso": "16020"
    },
    {
        "Numero": "173",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0169E7A",
        "Fuego": "534813",
        "Guia": "951170",
        "Peso": "16220"
    },
    {
        "Numero": "174",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2254G2A",
        "Fuego": "534923",
        "Guia": "951170",
        "Peso": "16220"
    },
    {
        "Numero": "175",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "DVY0362E4A",
        "Fuego": "534822",
        "Guia": "951170",
        "Peso": "16220"
    },
    {
        "Numero": "176",
        "Fecha": "2/23/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0046G0A",
        "Fuego": "534569",
        "Guia": "951170",
        "Peso": "16220"
    },
    {
        "Numero": "177",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0163G3A",
        "Fuego": "534748",
        "Guia": "951171",
        "Peso": "16910"
    },
    {
        "Numero": "178",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "OLG0701S5A",
        "Fuego": "533790",
        "Guia": "951171",
        "Peso": "16910"
    },
    {
        "Numero": "179",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "TLO2789G7A",
        "Fuego": "534915",
        "Guia": "951171",
        "Peso": "16910"
    },
    {
        "Numero": "180",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "IVY0318E8A",
        "Fuego": "534843",
        "Guia": "951171",
        "Peso": "16910"
    },
    {
        "Numero": "181",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "SLO2196G0A",
        "Fuego": "534881",
        "Guia": "951173",
        "Peso": "17150"
    },
    {
        "Numero": "182",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0478G8A",
        "Fuego": "534703",
        "Guia": "951173",
        "Peso": "17150"
    },
    {
        "Numero": "183",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "MLO2232G4A",
        "Fuego": "534893",
        "Guia": "951173",
        "Peso": "17150"
    },
    {
        "Numero": "184",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0162E4A",
        "Fuego": "534774",
        "Guia": "951173",
        "Peso": "17150"
    },
    {
        "Numero": "185",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "IVY0352E4A",
        "Fuego": "534870",
        "Guia": "951176",
        "Peso": "17820"
    },
    {
        "Numero": "186",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "DVY0367E9A",
        "Fuego": "534830",
        "Guia": "951176",
        "Peso": "17820"
    },
    {
        "Numero": "187",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0340G6A",
        "Fuego": "534704",
        "Guia": "951176",
        "Peso": "17820"
    },
    {
        "Numero": "188",
        "Fecha": "2/26/24",
        "Proveedor": "Michelin",
        "Serie": "GLJ0235U4C",
        "Fuego": "534997",
        "Guia": "951176",
        "Peso": "17820"
    },
    {
        "Numero": "189",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "OLH1335G1A",
        "Fuego": "534449",
        "Guia": "951179",
        "Peso": "15560"
    },
    {
        "Numero": "190",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0053G3A",
        "Fuego": "534568",
        "Guia": "951179",
        "Peso": "15560"
    },
    {
        "Numero": "191",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "SLH0218G8A",
        "Fuego": "534571",
        "Guia": "951179",
        "Peso": "15560"
    },
    {
        "Numero": "192",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "GLO0014G2A",
        "Fuego": "534655",
        "Guia": "951179",
        "Peso": "15560"
    },
    {
        "Numero": "193",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "RLO1354G2A",
        "Fuego": "534859",
        "Guia": "951180",
        "Peso": "16080"
    },
    {
        "Numero": "194",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0676G0A",
        "Fuego": "534725",
        "Guia": "951180",
        "Peso": "16080"
    },
    {
        "Numero": "195",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "RLO1322G4A",
        "Fuego": "534866",
        "Guia": "951180",
        "Peso": "16080"
    },
    {
        "Numero": "196",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "RLH0513G3A",
        "Fuego": "534575",
        "Guia": "951180",
        "Peso": "16080"
    },
    {
        "Numero": "197",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0652G4A",
        "Fuego": "534711",
        "Guia": "951181",
        "Peso": "15960"
    },
    {
        "Numero": "198",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "DVY0336E0A",
        "Fuego": "534829",
        "Guia": "951181",
        "Peso": "15960"
    },
    {
        "Numero": "199",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "FVB0060E6A",
        "Fuego": "534624",
        "Guia": "951181",
        "Peso": "15960"
    },
    {
        "Numero": "200",
        "Fecha": "2/29/24",
        "Proveedor": "Michelin",
        "Serie": "RLH0635G1A",
        "Fuego": "534546",
        "Guia": "951181",
        "Peso": "15960"
    },
    {
        "Numero": "201",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0212G4A",
        "Fuego": "534804",
        "Guia": "951196",
        "Peso": "16420"
    },
    {
        "Numero": "202",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "OLN0657A8A",
        "Fuego": "534064",
        "Guia": "951196",
        "Peso": "16420"
    },
    {
        "Numero": "203",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0253G3A",
        "Fuego": "534673",
        "Guia": "951196",
        "Peso": "16420"
    },
    {
        "Numero": "204",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0050E6A",
        "Fuego": "534785",
        "Guia": "951196",
        "Peso": "16420"
    },
    {
        "Numero": "205",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0694G2A",
        "Fuego": "534720",
        "Guia": "951197",
        "Peso": "16480"
    },
    {
        "Numero": "206",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0214G2A",
        "Fuego": "534658",
        "Guia": "951197",
        "Peso": "16480"
    },
    {
        "Numero": "207",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0019E7A",
        "Fuego": "534770",
        "Guia": "951197",
        "Peso": "16480"
    },
    {
        "Numero": "208",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0310G6A",
        "Fuego": "534701",
        "Guia": "951197",
        "Peso": "16480"
    },
    {
        "Numero": "209",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "GLO0086G0A",
        "Fuego": "534664",
        "Guia": "951198",
        "Peso": "15630"
    },
    {
        "Numero": "210",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0697G9A",
        "Fuego": "534722",
        "Guia": "951198",
        "Peso": "15630"
    },
    {
        "Numero": "211",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "FVB0038E8A",
        "Fuego": "534618",
        "Guia": "951198",
        "Peso": "15630"
    },
    {
        "Numero": "212",
        "Fecha": "3/13/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0203G3A",
        "Fuego": "534743",
        "Guia": "951198",
        "Peso": "15630"
    },
    {
        "Numero": "213",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0214G1A",
        "Fuego": "534657",
        "Guia": "951217",
        "Peso": "16560"
    },
    {
        "Numero": "214",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "JLH1514G2A",
        "Fuego": "534480",
        "Guia": "951217",
        "Peso": "16560"
    },
    {
        "Numero": "215",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0553G3A",
        "Fuego": "534726",
        "Guia": "951217",
        "Peso": "16560"
    },
    {
        "Numero": "216",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "CVY0055E1A",
        "Fuego": "534762",
        "Guia": "951217",
        "Peso": "16560"
    },
    {
        "Numero": "217",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0725G1A",
        "Fuego": "534719",
        "Guia": "951218",
        "Peso": "16810"
    },
    {
        "Numero": "218",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLJ0039T5C",
        "Fuego": "535072",
        "Guia": "951218",
        "Peso": "16810"
    },
    {
        "Numero": "219",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "JLO1054G2A",
        "Fuego": "534736",
        "Guia": "951218",
        "Peso": "16810"
    },
    {
        "Numero": "220",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0056E0A",
        "Fuego": "534782",
        "Guia": "951218",
        "Peso": "16810"
    },
    {
        "Numero": "221",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "HLH0937G9A",
        "Fuego": "534383",
        "Guia": "951219",
        "Peso": "16710"
    },
    {
        "Numero": "222",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "RLH0497G9A",
        "Fuego": "534507",
        "Guia": "951219",
        "Peso": "16710"
    },
    {
        "Numero": "223",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "TLH0678G8A",
        "Fuego": "534635",
        "Guia": "951219",
        "Peso": "16710"
    },
    {
        "Numero": "224",
        "Fecha": "3/27/24",
        "Proveedor": "Michelin",
        "Serie": "IVY0313E3A",
        "Fuego": "534839",
        "Guia": "951219",
        "Peso": "16710"
    },
    {
        "Numero": "225",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0713G3A",
        "Fuego": "534858",
        "Guia": "951239",
        "Peso": "16160"
    },
    {
        "Numero": "226",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "DVY0365E1A",
        "Fuego": "534825",
        "Guia": "951239",
        "Peso": "16160"
    },
    {
        "Numero": "227",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "SLO2190G6A",
        "Fuego": "534882",
        "Guia": "951239",
        "Peso": "16160"
    },
    {
        "Numero": "228",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0144E2A",
        "Fuego": "534781",
        "Guia": "951239",
        "Peso": "16160"
    },
    {
        "Numero": "229",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "MLH0107G9A",
        "Fuego": "534608",
        "Guia": "951240",
        "Peso": "15590"
    },
    {
        "Numero": "230",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0182G4A",
        "Fuego": "534659",
        "Guia": "951240",
        "Peso": "15590"
    },
    {
        "Numero": "231",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "LLH0046G0A",
        "Fuego": "534569",
        "Guia": "951240",
        "Peso": "15590"
    },
    {
        "Numero": "232",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0399G7A",
        "Fuego": "534706",
        "Guia": "951240",
        "Peso": "15590"
    },
    {
        "Numero": "233",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "NLO0144G2A",
        "Fuego": "534799",
        "Guia": "951241",
        "Peso": "15650"
    },
    {
        "Numero": "234",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "PLN1413A2A",
        "Fuego": "534203",
        "Guia": "951241",
        "Peso": "15650"
    },
    {
        "Numero": "235",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "RLH0723G3A",
        "Fuego": "534538",
        "Guia": "951241",
        "Peso": "15650"
    },
    {
        "Numero": "236",
        "Fecha": "4/5/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0059E7A",
        "Fuego": "534790",
        "Guia": "951241",
        "Peso": "15650"
    },
    {
        "Numero": "237",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "NLJ3466G0A",
        "Fuego": "535018",
        "Guia": "951296",
        "Peso": "17060"
    },
    {
        "Numero": "238",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0560G6A",
        "Fuego": "534692",
        "Guia": "951296",
        "Peso": "17060"
    },
    {
        "Numero": "239",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "TLO2694G2A",
        "Fuego": "534909",
        "Guia": "951296",
        "Peso": "17060"
    },
    {
        "Numero": "240",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "HLO0263G3A",
        "Fuego": "534671",
        "Guia": "951296",
        "Peso": "17060"
    },
    {
        "Numero": "241",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "XVY0072E4A",
        "Fuego": "534808",
        "Guia": "951297",
        "Peso": "16880"
    },
    {
        "Numero": "242",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0654G2A",
        "Fuego": "534691",
        "Guia": "951297",
        "Peso": "16880"
    },
    {
        "Numero": "243",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "PLH0071G5A",
        "Fuego": "534497",
        "Guia": "951297",
        "Peso": "16880"
    },
    {
        "Numero": "244",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLO0563G3A",
        "Fuego": "534693",
        "Guia": "951297",
        "Peso": "16880"
    },
    {
        "Numero": "245",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "OLJ0135T9C",
        "Fuego": "535113",
        "Guia": "951298",
        "Peso": "16690"
    },
    {
        "Numero": "246",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "SLO2183G3A",
        "Fuego": "534884",
        "Guia": "951298",
        "Peso": "16690"
    },
    {
        "Numero": "247",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "TLO2762G4A",
        "Fuego": "534899",
        "Guia": "951298",
        "Peso": "16690"
    },
    {
        "Numero": "248",
        "Fecha": "4/27/24",
        "Proveedor": "Michelin",
        "Serie": "KLO1155G1A",
        "Fuego": "535052",
        "Guia": "951298",
        "Peso": "16690"
    }
]


docs.forEach(async (doc) => {
    try {
        const document = await Document.findMany({
            where: {
                guia: doc.Guia,
                deletedAt: null,
            },
        });
        if (document) {
            console.log('Documento ya existe');
        } else {
            try {
                const newdocument = await Document.create({
                    data: {
                        guia: doc.Guia,
                        weight: parseInt(doc.Peso),
                        egressDate: doc.Fecha,
                        ingressDate: doc.Fecha,
                        companyId: 5,
                        user2Id: 3,
                        userId: 3,
                        observation: null,
                        stateId: 2,
                    },
                });
                console.log(newdocument);
                console.log(newdocument.documentId);
                docs.forEach(async (docu) => {
                    if (docu.Guia = newdocument.guia) {
                        try {
                            const documentItem = await DocumentItem.create({
                                data: {
                                    documentId: newdocument.documentId,
                                    stateId: 2,
                                    fuego: docu.Fuego,
                                    matricula: docu.Serie,
                                    typeId: 1,
                                },
                            });
                            console.log(documentItem);
                        } catch (error) {
                            console.error(error);

                        }
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
    } catch (error) {
        console.error(error);

    }

},);



