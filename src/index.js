import SwaggerUI from 'swagger-ui';
import SwaggerUIStandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset';
import 'swagger-ui/dist/swagger-ui.css';
import './style/main.css';

SwaggerUI({
  dom_id: '#swagger',
  presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
  layout: 'StandaloneLayout',
});