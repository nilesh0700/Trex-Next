import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCityStatistic extends Struct.ComponentSchema {
  collectionName: 'components_shared_city_statistics';
  info: {
    description: 'Statistical information about cities';
    displayName: 'City Statistic';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    count: Schema.Attribute.String;
    population: Schema.Attribute.String;
  };
}

export interface SharedEventFlowItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_flow_items';
  info: {
    description: 'Individual event flow schedule item';
    displayName: 'Event Flow Item';
  };
  attributes: {
    day: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
          min: 1;
        },
        number
      >;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\uD83D\uDCDD'>;
    time: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPricingPackage extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_packages';
  info: {
    description: 'Exhibition space pricing packages';
    displayName: 'Pricing Package';
  };
  attributes: {
    bg_color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bg-white'>;
    button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Book Now'>;
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    gst: Schema.Attribute.String & Schema.Attribute.DefaultTo<'+ GST'>;
    is_popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    text_color: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTargetCity extends Struct.ComponentSchema {
  collectionName: 'components_shared_target_cities';
  info: {
    description: 'Individual target city information';
    displayName: 'Target City';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    is_host: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.city-statistic': SharedCityStatistic;
      'shared.event-flow-item': SharedEventFlowItem;
      'shared.pricing-package': SharedPricingPackage;
      'shared.target-city': SharedTargetCity;
    }
  }
}
