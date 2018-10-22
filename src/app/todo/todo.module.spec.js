import { TodoModule } from './todo.module';
describe('TodoModule', function () {
    var todoModule;
    beforeEach(function () {
        todoModule = new TodoModule();
    });
    it('should create an instance', function () {
        expect(todoModule).toBeTruthy();
    });
});
//# sourceMappingURL=todo.module.spec.js.map