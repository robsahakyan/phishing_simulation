import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { User } from "../modules/user/user.schema";

import { ContextProvider } from "../providers/context.provider";

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>){
        const request = context.switchToHttp().getRequest();
        
        ContextProvider.setAuthUser(<User>request.user);
        return next.handle();
    }
}