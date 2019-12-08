function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}
//Set - это структура данных куда мы можем запис-ть данные кот-е не будут повт-ся.Если мы будем зап-м дубликат то он не будет хранится
const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];

    if (cache.has(url)) {
      return `${url}- Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
});

console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("angular.io"));
