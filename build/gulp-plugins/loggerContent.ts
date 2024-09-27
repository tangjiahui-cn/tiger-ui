import through2 from 'through2';

export function loggerContent<T>(stream: T): T {
  return (stream as any).pipe(
    through2.obj(function (file, _, cb) {
      console.log(file.contents.toString());
      cb(null, file);
    }),
  );
}
