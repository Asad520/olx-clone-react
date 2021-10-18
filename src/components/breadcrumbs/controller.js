export default function useBreadcrumbs(breadcrumbs) {
  const renderBreadcrumbs = () =>
    breadcrumbs.map((breadcrumb) => (
      <li className='breadcrumb-item' key={breadcrumb.id}>
        <span>{breadcrumb.name}</span>
      </li>
    ));

  return [renderBreadcrumbs];
}
