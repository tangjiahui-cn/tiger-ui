import through2 from 'through2';

export function loggerPath<T>(stream: T): T {
  return (stream as any).pipe(
    through2.obj(function (file, _, cb) {
      console.log('current: ', file.path);
      cb(null, file);
    }),
  );
}
