import { GetFilters } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";

export class getFiltersController implements Controller {
  constructor(private readonly getFilters: GetFilters) {}

  async handle(): Promise<any> {
    try {
      const filters = await this.getFilters.perform();
      return HttpHelper.OK(filters, "Filters received");
    } catch (error) {
      return HttpHelper.BAD_REQUEST(error as Error);
    }
  }
}
