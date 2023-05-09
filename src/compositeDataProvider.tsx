class CompositeDataProvider {
  dataProviders: any;
  constructor(dataProviders: any) {
    this.dataProviders = dataProviders;
  }

  _delegate(name: string, resource: any, params: any) {
    const { dataProvider } = this.dataProviders.find(
      (dp: { resources: string | any[] }) => dp.resources.includes(resource)
    );

    return dataProvider[name](resource, params);
  }

  getList(resource: any, params: any) {
    return this._delegate('getList', resource, params);
  }
  getOne(resource: any, params: any) {
    return this._delegate('getOne', resource, params);
  }
  getMany(resource: any, params: any) {
    return this._delegate('getMany', resource, params);
  }
  getManyReference(resource: any, params: any) {
    return this._delegate('getManyReference', resource, params);
  }
  create(resource: any, params: any) {
    return this._delegate('create', resource, params);
  }
  update(resource: any, params: any) {
    return this._delegate('update', resource, params);
  }
  updateMany(resource: any, params: any) {
    return this._delegate('updateMany', resource, params);
  }
  delete(resource: any, params: any) {
    return this._delegate('delete', resource, params);
  }
  deleteMany(resource: any, params: any) {
    return this._delegate('deleteMany', resource, params);
  }
}

export default CompositeDataProvider;
