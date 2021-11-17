export default class xmlCancelarUltimaVendaSat{
    constructor(){
        this.xml =
        '<CFeCanc>'+
        '<infCFe chCanc="novoCFe">'+
        '<ide>'+
            '<CNPJ>16716114000172</CNPJ>'+
            '<signAC>SGR-SAT SISTEMA DE GESTAO E RETAGUARDA DO SAT</signAC>'+
            '<numeroCaixa>001</numeroCaixa>'+
        '</ide>'+
        '<emit/>'+
        '<dest></dest>'+
        '<total/>'+
    '</infCFe>'+
    '</CFeCanc>'
        
    }

    getXmlCancelarUltimaVendaSat(){
        return this.xml;
    }
}