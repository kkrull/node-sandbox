export abstract class ReadWriteStorage {
  abstract getItem(key: string): string | null;
  abstract removeItem(key: string);
  abstract setItem(key: string, value: string);
}
