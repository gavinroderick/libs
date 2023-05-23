import { createLogger } from '@restorecommerce/logger';
import { createServiceConfig } from '@restorecommerce/service-config';

const cfg = createServiceConfig(process.cwd());
const loggerCfg = cfg.get('logger');

loggerCfg.esTransformer = (msg: { fields: string; }) => {
  msg.fields = JSON.stringify(msg.fields);
  return msg;
};

export default createLogger(loggerCfg);
