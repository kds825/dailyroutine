import {newSet,modules} from './lib/catalog.mjs';
// Preserve the latest saved set on upgrades, reloads, and later calendar days.
export function resumeSet(data,now=new Date()){
 const usable=id=>modules.every(m=>data.instances[data.sets[id]?.lessons[m.id]]?.module===m.id);
 if(data.activeSetId&&usable(data.activeSetId))return data.activeSetId;
 data.activeSetId=Object.keys(data.sets).reverse().find(usable)||newSet(data,now);
 return data.activeSetId;
}
