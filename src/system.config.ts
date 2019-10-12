class SystemConfigData {
  get HOGE() {
    return process.env.HOGE;
  }

  get PORT() {
    return process.env.PORT ? Number(process.env.PORT) : 3000;
  }
}

export const SystemConfig = new SystemConfigData();
