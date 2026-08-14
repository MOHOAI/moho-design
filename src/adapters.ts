import type { MohoCatalogEntry } from './catalog.js';

export interface MohoAdapterManifest {
  id: string;
  packageName: string;
  displayName: string;
  source: string;
  license: string;
  capabilities: string[];
  peerDependency?: string;
  status: 'optional' | 'experimental' | 'planned';
}

export interface MohoAdapter<T = unknown> {
  manifest: MohoAdapterManifest;
  create: (options?: Record<string, unknown>) => T;
}

export interface MohoAdapterRegistry {
  register<T>(adapter: MohoAdapter<T>): void;
  get(packageName: string): MohoAdapter | undefined;
  list(): MohoAdapterManifest[];
}

export const defineMohoAdapter = <T>(manifest: MohoAdapterManifest, create: (options?: Record<string, unknown>) => T): MohoAdapter<T> => ({
  manifest: { ...manifest, capabilities: [...manifest.capabilities] },
  create
});

export const createMohoAdapterRegistry = (initial: MohoAdapter[] = []): MohoAdapterRegistry => {
  const adapters = new Map<string, MohoAdapter>();
  for (const adapter of initial) adapters.set(adapter.manifest.packageName, adapter);
  return {
    register<T>(adapter: MohoAdapter<T>) {
      if (!adapter.manifest.packageName.trim()) throw new Error('اسم حزمة adapter مطلوب.');
      adapters.set(adapter.manifest.packageName, adapter);
    },
    get(packageName) {
      return adapters.get(packageName);
    },
    list() {
      return [...adapters.values()].map((adapter) => ({ ...adapter.manifest, capabilities: [...adapter.manifest.capabilities] }));
    }
  };
};

export const catalogEntryToAdapterManifest = (entry: MohoCatalogEntry, capabilities: string[] = []): MohoAdapterManifest => ({
  id: `catalog:${entry.id}`,
  packageName: entry.npmName,
  displayName: entry.name,
  source: entry.source,
  license: entry.license,
  capabilities,
  peerDependency: entry.npmName,
  status: 'planned'
});
