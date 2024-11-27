import { UpdateFilters } from "@/components/companies/hooks/useFilter";
import { Accordion } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { DefaultFilterListParams } from "../../config";
import { configs as baseConfigs, Config } from "./config";
import ItemHidden from "./item-hidden";
import ItemVisible from "./item-visible";

const List = ({
  params,
  updateFilters,
}: {
  params: DefaultFilterListParams;
  updateFilters: UpdateFilters;
}) => {
  const [configs, setConfigs] = useState(baseConfigs);
  useEffect(() => {
    const _configs = baseConfigs.map((config) => {
      if (config.hidden) {
        return config;
      } else {
        let _params: Partial<DefaultFilterListParams> = {};
        (config.keys as (keyof DefaultFilterListParams)[]).forEach((key) => {
          if (params.hasOwnProperty(key) && params[key]) {
            _params[key] = params[key];
          }
        });

        return { ...config, params: _params };
      }
    });
    setConfigs(_configs);
  }, [params]);
  return (
    <Accordion type="single" collapsible className="w-full">
      {configs.map((config) =>
        config.hidden ? (
          <ItemHidden config={config as Config} key={config.id} />
        ) : (
          <ItemVisible
            config={config as Config}
            key={config.id}
            updateFilters={updateFilters}
          />
        )
      )}
    </Accordion>
  );
};

export default List;
