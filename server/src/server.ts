import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { WalletRoute } from './routes/wallet.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new WalletRoute()]);

app.listen();
