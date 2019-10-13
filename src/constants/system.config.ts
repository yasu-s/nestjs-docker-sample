function toNumberOrDefault(value: string, defaultValue: number): number {
  if (value === undefined || value === null) {
    return defaultValue;
  }
  return Number(value);
}

class SystemConfigData {
  get HOGE() {
    return process.env.HOGE || '';
  }

  get PORT() {
    return toNumberOrDefault(process.env.PORT, 3000);
  }
}

export const SystemConfig = new SystemConfigData();
