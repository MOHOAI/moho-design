#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, resolve } from 'node:path';
import { compileMoToCss, compileMoToJson, parseMo } from './index.js';

const usage = `موهو ديزاين — أدوات صيغة .mo

الاستخدام:
  moho validate <file.mo>
  moho css <file.mo> [-o output.css]
  moho json <file.mo> [-o output.json]
`;

const outputPath = (args: string[]) => {
  const index = args.indexOf('-o');
  return index >= 0 ? args[index + 1] : undefined;
};

const main = async () => {
  const [command, sourcePath, ...rest] = process.argv.slice(2);
  if (!command || !sourcePath || command === '--help' || command === '-h') {
    process.stdout.write(usage);
    return;
  }
  const absoluteSource = resolve(sourcePath);
  const document = parseMo(await readFile(absoluteSource, 'utf8'));
  if (command === 'validate') {
    process.stdout.write(`صالح: ${document.name} (MO ${document.version})\n`);
    return;
  }
  const output = command === 'css' ? compileMoToCss(document) : command === 'json' ? compileMoToJson(document) : undefined;
  if (output === undefined) throw new Error(`أمر غير معروف: ${command}`);
  const requestedOutput = outputPath(rest);
  if (requestedOutput) {
    await writeFile(resolve(requestedOutput), output, 'utf8');
    process.stdout.write(`تم إنشاء ${requestedOutput}\n`);
    return;
  }
  const defaultExtension = command === 'css' ? '.css' : '.json';
  const defaultPath = resolve(dirname(absoluteSource), `${basename(absoluteSource, extname(absoluteSource))}${defaultExtension}`);
  await writeFile(defaultPath, output, 'utf8');
  process.stdout.write(`تم إنشاء ${defaultPath}\n`);
};

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`خطأ: ${message}\n`);
  process.exitCode = 1;
});
