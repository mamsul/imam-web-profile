import ImagePreview from '@/components/portfolio/image-preview';
import PortfolioCard from '@/components/portfolio/portfolio-card';
import Badge from '@/components/utility/badge';
import PortofolioJson from '@/lib/portfolio.json';
import { cn } from '@/lib/utils';

const PortfolioPage = () => {
  return (
    <div className="pb-12 pt-6 lg:px-3 lg:pt-12">
      <div className="grid w-full grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        {PortofolioJson.portfolio.map((item) => {
          return (
            <PortfolioCard key={`porfolio-card-${item.id}`} className="w-full">
              <ImagePreview title="yo" />
              <h4
                className={cn(
                  'mt-4 font-bold tracking-wider',
                  item.link && 'underline underline-offset-4',
                )}>
                <a href={item.link as string} target="_blank">
                  {item.name}
                </a>
              </h4>
              <div className="mt-4 flex w-full flex-wrap gap-2">
                {item.techStack.map((tech, idx) => (
                  <Badge key={`techstack-${item.id}-${idx}`}>
                    <span className="text-xs text-dark-label lg:text-sm">
                      {tech}
                    </span>
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-justify text-sm text-dark-text-secondary">
                {item.desc}
              </p>
            </PortfolioCard>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioPage;
