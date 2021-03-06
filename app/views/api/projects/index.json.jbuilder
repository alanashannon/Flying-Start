# json.partial! 'api/projects/project', projects: @projects

#safe
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq
        json.photo url_for(project.photo) if project.photo.attached?
    end
end

#safe
# json.users do 
#     @projects.each do |project|
#         json.set! project.author_id do 
#             json.name project.author.name
#         end
#     end
# end
  

# json.projects do 
#     @projects.each do |project|
#         json.set! project.id do 
#             json.extract! project, :id, :title, :category_id, :author_id, :location, :description, :end_date, :campaign, :funding_goal, :amount_pledged, :risks, :updates, :faq
            # json.author do 
            #     json.extract! project.author, :id, :name, :biography, :location 
            # end

#             json.photo url_for(project.photo) if project.photo.attached?
#         end
#     end
# end


