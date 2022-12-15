import createSettings, {SettingType, Settings} from "../../../src/core/settings";
import Singleton from "../../../dist/core/repository/singleton";
import axios from 'axios';
it('creates a new setting with singletons', () => {
    let settings = createSettings(axios, SettingType.Singleton);
    expect(settings instanceof Settings).toBe(true);
    expect(settings.repository instanceof Singleton);
});

it('defaults to a singleton repository', () => {
    let settings = createSettings(axios);
    expect(settings instanceof Settings).toBe(true);
    expect(settings.repository instanceof Singleton);
})