import AddonEvents from "./events";
import AddonViews from "./views";
import AddonWizard from "./wizard";
import AddonExport from "./export";
import Knowledge from "./knowledge";
import AddonTemplate from "./template";

class Knowledge4Zotero {
  public events: AddonEvents;
  public views: AddonViews;
  public wizard: AddonWizard;
  public export: AddonExport;
  public template: AddonTemplate;
  public knowledge: Knowledge;

  constructor() {
    this.events = new AddonEvents(this);
    this.views = new AddonViews(this);
    this.wizard = new AddonWizard(this);
    this.export = new AddonExport(this);
    this.template = new AddonTemplate(this);
    this.knowledge = new Knowledge(this);
  }
}

export default Knowledge4Zotero;
