import { UniqueIdService } from "./unique-id.service";

// nome do que vamos testar(nome da service, do component..) doque quero testar
describe(UniqueIdService.name, () => {
    let service: UniqueIdService = null;
    // antes de cada it gera uma nova instacia pra service
    beforeEach(() => {
        service = new UniqueIdService()
    });
    // alguma coisa Deve fazer algo Quando determinada situação
    // blabla should blabla when blablabla
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        // expectativa
        // espero que ele comece com 
        expect(id.startsWith('app-')).toBeTrue();
    });
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should not generate duplicate id when called multiple times`, () => {
        // o Set não aceita nada duplicado
        const ids = new Set();
        // faço a chamada 50 vezes e adiciono no set
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        // se não for igual a 50 quer dizer que alguma string esta duplicada 
        expect(ids.size).toEqual(50)
    });
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    shoud throw when called with empty`, () => {
        const emptyValues = [null, undefined,'','0','1']
        // pra saber se o metodo lança uma exessao temos que colocalo dentro de uma função
        emptyValues.forEach(value => expect(() => service.generateUniqueIdWithPrefix(value)).toThrowError())
    })
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    shoud throw when called with empty`, () => {
        const emptyValues = [null, undefined,'','0','1']
        // pra saber se o metodo lança uma exessao temos que colocalo dentro de uma função
        emptyValues.forEach(value => {
            expect(() => service.generateUniqueIdWithPrefix(value))
            .withContext(`qunado falhar vai mostrar empty value: ${value}`)
            .toThrowError()}
            )
    })
    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should get number generated when called`, () => {
        for (let i = 0; i < 50; i++) {
            service.generateUniqueIdWithPrefix('app')
        }
        const number = service.getNumberOfGeneratedUniqueIds();
        // expectativa
        // espero que ele contenha 50 numeros de id gerados
        expect(number).toEqual(50)
    });
});