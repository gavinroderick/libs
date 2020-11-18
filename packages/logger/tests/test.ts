import { createLogger, RestoreLoggerOptions } from '../src/index';

const opts: RestoreLoggerOptions = {
  loggerName: 'test',
  console: {
    handleExceptions: false,
    level: 'silly',
    colorize: true,
    prettyPrint: true
  }
};

describe('a logger', () => {
  it('can be instantiated', (done) => {
    try {
      let logger = createLogger(opts);
      done();
    } catch (err) {
      should.not.exist(err);
    }
  });

  describe('it should log', () => {
    let logger = createLogger(opts);
    it('a simple message', (done) => {
      logger.info('Simple message');
      done();
    });
    it('a message and an object', (done) => {
      logger.info('Message with an object', { test: 'testMessage' });
      done();
    });
    it('an Object', (done) => {
      logger.info({ test: 'test' });
      done();
    });
    it('log with level, a message and object', (done) => {
      logger.log('debug', 'Message with multiple objects',
        { test: 'test' },
        { test2: 'test2' });
      done();
    });
  });
});
