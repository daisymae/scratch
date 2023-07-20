import { Controller, Get } from "@nestjs/common";

// any route in the controller decorator applies to all routes
@Controller('/app')
export class AppController {
    @Get('/asdf')
    getRootRoute() {
        return 'hi there!';
    }
    
    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}

