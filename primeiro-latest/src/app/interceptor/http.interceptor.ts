import { HttpInterceptorFn } from '@angular/common/http';
import { count, retry, shareReplay } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req, next);
  // é possivel criar um req clone e adicionar headers globais
  return next(req).pipe(
    shareReplay(), // assim todas as funções que fazem uma http request terão o share replay, de modo que não precisa escrever elas com ele
    // tem como colocar cath errors tbm, mas eles serão globais :warning:
    retry({
      count: 2, // asim ele tenta a primeira vez que a função for cahmada, normalmente  depois tenta mais duas vezes
      delay: 1000
    })
  );
};
