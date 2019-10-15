function toNumberOrDefault(value: string, defaultValue: number): number {
  if (value === undefined || value === null) {
    return defaultValue;
  }
  return Number(value);
}

class SystemConfigData {
  readonly HOGE = process.env.HOGE || '';
  readonly PORT = toNumberOrDefault(process.env.PORT, 3000);
}

export const SystemConfig = new SystemConfigData();
